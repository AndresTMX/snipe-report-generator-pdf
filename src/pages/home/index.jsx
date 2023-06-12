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


function PageHome() {
  //hook del contexto
  const [state, dispatch] = useContext(DocContext);

  //Destructuracion de los estados del contexto
  const { initialStore, StatesModals } = state;

  // comprobacion de documento
  const {complete} = initialStore.storage? initialStore.storage: false;
  
  //Hooks de buscador, fetch de usuarios y paginación 
  const { search, setSearch } = useSearcher();
  const { dataUsers, loading } = useGetUsers();
  const {pageRender,searchResults, nextPage, prevPage} = usePagination(dataUsers, search, dispatch);

  return (
    <section className="container-responsive">
      <InputSearch
        state={search}
        setState={setSearch}
        resultSearch={searchResults}
      />

      <UserContainer nextPage={nextPage} prevPage={prevPage}>
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

        {loading && (
          <div className="loading-state">
            <ThreeDots />
          </div>
        )}

        {!loading && pageRender.length === 0 && <NotResultUsers />}

        {pageRender.map((user) => (
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

      <PreviewContainer>
        {complete != true ? (
          <NotDocState />
        ) : (
          <Viewer>
            <MyDocument state={state} />
          </Viewer>
        )}
      </PreviewContainer>
    </section>
  );
}

export { PageHome };
