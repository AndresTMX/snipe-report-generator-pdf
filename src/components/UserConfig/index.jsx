import { actionTypes as actionTypesDocs } from "../../Context/DocReducer";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { ThreeDots } from "../../components/Loading/";
import { useGetUsersSystems } from "../../Hooks/useGetUsersSystems";
import { Modal } from "../../modals/modal";
import './userConfig.css';

function UserConfig({ state, dispatch }) {
  const { initialStore, StatesModals } = state;
  const { storage } = initialStore ? initialStore : {};
  const { dataDepartment, dataUserSystems, loading } = useGetUsersSystems();
  const managerSystems = dataDepartment? dataDepartment.manager.name: 'Error al cargar información de usuario';
  const dataUsers = dataUserSystems? dataUserSystems.map((user) => ({
        name: user.name,
        id: user.id
      }))
    : [];


  const onSelect = (event) => {
    let newState = {
      ...storage,
      emisor: event.target.value,
      managerSystems:managerSystems
    };
    dispatch({ type: actionTypesDocs.updateStorage, payload: newState });
  };

  const closeModal = () => {
    dispatch({type: actionTypesModals.setModalConfig, payload: false})
  }

  return (
    <>
      {loading && (
        <Modal>
          <section className="section-config">
            <ThreeDots />
          </section>
        </Modal>
      )}

      {!loading && (
        <Modal>
          <section className="section-config">
            <div className="container-button">
                <button onClick={ closeModal}>x</button>
            </div>
            <div>
              <h2>Configuraciones de usuario</h2>

              <h4>Lider de sistemas</h4>
              <p>{managerSystems}</p>

              <h4>Usuario emisor</h4>
              <select onChange={onSelect}>
              {dataUsers.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          </section>
        </Modal>
      )}
    </>
  );
}

export { UserConfig };
