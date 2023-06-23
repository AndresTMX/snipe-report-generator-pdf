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
import { useContext } from 'react';
import { DocContext } from '../../Context/DocContext';
import { usePagination } from "../../Hooks/usePagination";
//state
import { NotDocState } from "../../components/states/notDocState";
import { NotResultUsers } from "../../components/states/notResultUsersState";
//notification
import { Notification } from "../../modals/notification";
import {actionTypes as actionTypesModals} from '../../Context/StatesModalsReducer';
//Icons
import {LuFilter} from 'react-icons/lu';
//MUI
import { Container, Radio , FormLabel, Select, MenuItem} from "@mui/material";
import Box from '@mui/material/Box';


function PageHome() {
  //hook del contexto
  const [state, dispatch] = useContext(DocContext);

  //Destructuracion de los estados del contexto
  const { initialStore, StatesModals } = state;

  // comprobacion de documento
  const {complete} = initialStore.storage? initialStore.storage: false;
  
  //Hooks de buscador, fetch de usuarios y paginación 
  const { search, setSearch } = useSearcher();
  const { dataUsers, loading, error } = useGetUsers();
  const {pageRender,searchResults, nextPage, prevPage} = usePagination(dataUsers, search, dispatch);

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
          paddingTop: "280px",
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
            height: "100vh",
            gap: "20px",
          }}
        >
          {/* <InputSearch
        state={search}
        setState={setSearch}
        resultSearch={searchResults}
      /> */}

          {StatesModals.modalNotification && (
            <Notification>
              <div className="container-notification">
                <p>{StatesModals.modalNotification}</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: actionTypesModals.setModalNotification,
                      payload: false,
                    })
                  }
                >
                  Ok
                </button>
              </div>
            </Notification>
          )}

          <Container>
            <Box
              sx={{
                background: "#0071BB",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "40px",
                alignItems: "center",
                justifyContent: "flex-start",
                color: "white",
                gap: "15px",
                paddingLeft: "10px",
                fontSize: "12px",
              }}
            >
              <FormLabel
                sx={{
                  color: "white",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  gap: "5px",
                }}
              >
                <Box>
                  <LuFilter />
                </Box>
                <span>Filtrar</span>
              </FormLabel>

              <FormLabel
                sx={{
                  color: "white",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                Solo acivos
                <Radio
                  size="small"
                  sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
                />
              </FormLabel>

              <FormLabel
                sx={{
                  color: "white",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                Empresa
                <Select
                  size="small"
                  variant="standard"
                  disableUnderline
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "white", // Cambia el color aquí
                    },
                  }}
                >
                  <MenuItem>Conexiones Y Mangueras</MenuItem>
                  <MenuItem>Instrumentación y Precisión</MenuItem>
                  <MenuItem>Staff Recursos En Movimiento</MenuItem>
                  <MenuItem>TOH Industrial</MenuItem>
                </Select>
              </FormLabel>
            </Box>
          </Container>

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
        </Container>

        {/* <PreviewContainer>
        {complete != true ? (
          <NotDocState />
        ) : (
          <Viewer>
            <MyDocument state={state} />
          </Viewer>
        )}
      </PreviewContainer> */}
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          background: "#D9D9D9",
          height: "100vh",
          position: "fixed",
          right: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingTop: "270px",
          }}
        >
          <InputSearch
            state={search}
            setState={setSearch}
            resultSearch={searchResults}
          />
        </Box>
      </Container>
    </Container>
  );
}

export { PageHome };
