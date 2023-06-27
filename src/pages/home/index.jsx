//estilos
import "./home.css";
//componentes
import { ThreeDots } from "../../components/Loading";
import { useGetUsers } from "../../Hooks/useGetUsers";
import { UserCard } from "../../components/userCard/";
import { InputSearch } from "../../components/Searcher";
import { UserContainer } from "../../sections/UserContainer/";
import { PreviewContainer } from "../../sections/PreviewContainer";
import { useSearcher } from "../../components/Searcher/useSearcher";
import { Viewer } from "../../components/PDFViewer";
import { MyDocument } from "../../components/PDFGenerator";
//contexto
import { useContext } from "react";
import { DocContext } from "../../Context/DocContext";
import { usePagination } from "../../Hooks/usePagination";
//state
import { NotDocState } from "../../components/states/notDocState";
import { NotResultUsers } from "../../components/states/notResultUsersState";
//Hooks
import {Modal} from '../../modals/modal';
import { DocStoreCardComent } from "../../components/DocStoreCardComent";

//filter
import { Filters } from "../../components/Filters";
import { ConfigReport } from "../../components/ConfigReport";
//DocStoreItems

//notification
import { Notification } from "../../modals/notification";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
//MUI
import {
  Container,
  Button,
  Paper, 
  Box
} from "@mui/material";
import { actionTypes as actionTypesDocs} from "../../Context/DocReducer";

function PageHome() {
  //hook del contexto
  const [state, dispatch] = useContext(DocContext);

  //Destructuracion de los estados del contexto
  const { initialStore, StatesModals } = state;

  // comprobacion de documento
  const { complete } = initialStore.storage ? initialStore.storage : false;
  const { assets, accessories } = initialStore.storage ? initialStore.storage : {};

  //Hooks de buscador, fetch de usuarios y paginación
  const { search, setSearch } = useSearcher();
  const { dataUsers, loading, error } = useGetUsers();
  const { pageRender, searchResults, nextPage, prevPage, filter, setActives } = usePagination(
    dataUsers,
    search,
    dispatch);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        gap: "10px",
        maxWidth: "1500px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          paddingTop: "250px",
          paddingBottom: "50px",
          width: "70%",
          height: "100vh",
          position: "fixed",
          left: "20px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "650px",
            gap: "20px",
          }}
        >
          {StatesModals.modalNotification && (
            <Notification>
              <Paper
                elevation={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "15px",
                  justifyContent: "center",
                }}
              >
                <p>{StatesModals.modalNotification}</p>
                <Button
                  onClick={() =>
                    dispatch({
                      type: actionTypesModals.setModalNotification,
                      payload: false,
                    })
                  }
                >
                  Ok
                </Button>
              </Paper>
            </Notification>
          )}

          {StatesModals.modalComent && (
            <Modal>
              <DocStoreCardComent state={state} dispatch={dispatch} />
            </Modal>
          )}

          <Filters
            nextPage={nextPage}
            prevPage={prevPage}
            setActives={setActives}
            filter={filter}
          />

          {!complete && (
            <UserContainer>

              {loading && (
                <div className="loading-state">
                  <ThreeDots />
                </div>
              )}

              {!loading && !pageRender.length && (
                <NotResultUsers error={error} pageRender={pageRender} />
              )}

              {pageRender &&
                pageRender.map((user) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    user={user.name}
                    department={user.department?.name}
                    manager={user.manager?.name}
                    avatar={user?.avatar}
                    location={user.location?.name}
                    company={user.company?.name}
                    accesories={user?.accessories_count}
                    licences={user?.licenses_count}
                    assets={user?.assets_count}
                    email={user?.email}
                    jobtitle={user?.jobtitle}
                    state={state}
                    dispatch={dispatch}
                  />
                ))}
            </UserContainer>
          )}

          {complete && (
            <Box sx={{ display:'flex', flexDirection:'column', paddingTop:'20px' , paddingBottom:'20px' , heigth:'auto%', width: '100%', overflowY: "scroll",
            alignItems:'center',
            margin:'auto',
            backgroundColor:'#d9d9d9',
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "lightgray",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "gray",
            }, }}>
              <Button onClick={() => dispatch({type:actionTypesDocs.updateStorage,payload: {...initialStore.storage, complete:false } })}>close</Button>
              <PreviewContainer>
              <Viewer>
                <MyDocument state={state} />
              </Viewer>
            </PreviewContainer>
            </Box>
          )}

        </Container>
      </Container>

      <ConfigReport
        state={state}
        dispatch={dispatch}
        search={search}
        setSearch={setSearch}
        searchResults={searchResults}
      />
    </Container>
  );
}

export { PageHome };
