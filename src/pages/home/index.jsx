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
  const {pageRender,searchResults, nextPage, prevPage} = usePagination(dataUsers, search);

  return (
    <section className="container-responsive">
      <InputSearch state={search} setState={setSearch} resultSearch={searchResults} />

          <UserContainer nextPage={nextPage} prevPage={prevPage}>
            {loading && (
              <div className="loading-state">
                <ThreeDots />
              </div>
            )}

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
                accesories={user.accessories_count}
                assets={user.assets_count}
                email={user?.email}
                state={state}
                dispatch={dispatch}
              />
            ))}
          </UserContainer>

          <PreviewContainer>
            {
              
              complete != true? (
               <p>Aun sin documentos</p> 
              ) : (
              <Viewer>
                <MyDocument state={state}/>
              </Viewer>
              )
            }
          </PreviewContainer>
    </section>
  );
}

export { PageHome };
