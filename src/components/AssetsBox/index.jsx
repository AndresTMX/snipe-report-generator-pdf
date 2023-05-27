import "./assetsBox.css";
import { UseModal } from "../../Hooks/useModal";
import { useItems } from "../../Hooks/useItems";
import { ViewMaintances } from "../ViewMaintances";
import { useMaintancesAssets } from "../../Hooks/useMaintancesAsset";
import { BsTools } from "react-icons/bs";
import { actionTypes } from "../../Context/DocReducer";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { Notification } from "../../modals/notification";

function AssetsBox({
  modal,
  setModal,
  dataAssets,
  idUser,
  dataUser,
  state,
  dispatch,
}) {
  const { user, company, location, manager, email, department } = dataUser;

  const { actions, states } = useItems({
    idUser,
    user,
    company,
    location,
    manager,
    email,
    department,
  });

  const { addItem, deleteItem } = actions;

  const { countAssets } = states;

  const { modal3, setModal3 } = UseModal();

  const dataRender = dataAssets || [];

  const { initialStore, StatesModals } = state;

  const { storage } = initialStore;

  const AssetsList = storage?.assets ? storage?.assets.map((asset) => asset.asset_tag) : [];

  const { Maintances, dataMaintances, loading, idAsset, setidAsset } = useMaintancesAssets();

  const ButtonGetMaintance = (id) => {
    setidAsset(id);
    setModal3(!modal3);
  };

  const ButtonAddItem = (item) => {
    const tag = item.asset_tag;

    const stateVerification = JSON.parse(localStorage.getItem(idUser));

    const preState = stateVerification ? stateVerification : false;

    const repeat = preState.assets
      ? preState.assets.find((asset) => asset.asset_tag === tag)
      : false;

    if (repeat) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Ya haz agregado este accesorio",
      });
    } else {
      addItem( item );
    }
  };

  const ButtonDeleteItem = (tag, idUser) => {
    const local = JSON.parse(localStorage.getItem(idUser));

    const { assets } = local;

    const repeat = assets
      ? assets.findIndex((asset) => asset.asset_tag === tag)
      : false;

    if (repeat >= 0) {
      deleteItem(tag, idUser);
    } else {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Aun no has agregado este activo",
      });
    }
  };

  const CloseModal = () => {
    setModal(!modal);
    const newData = JSON.parse(localStorage.getItem(idUser));
    dispatch({ type: actionTypes.updateStorage, payload: newData });
  };

  return (
    <>
      <div className="section">
        <div className="container-button close">
          <span className="title">Lista de activos</span>
          <button className="button-close" onClick={CloseModal}>
            x
          </button>
        </div>
        
        <div className="container">
          <span>Activos agregados: {countAssets}</span>
          <div className="container-button">
            <button className="button-action">Acta de mantenimiento</button>
            <button className="button-action">Check List</button>
            <button className="button-action">Baja de equipos</button>
          </div>

          <div>
            <table>
              <tbody className='table-header'>
                <tr>
                  <th>OFCMI</th>
                  <th>DESCRIPCION</th>
                  <th>NS</th>
                  <th>ACCION</th>
                </tr>

                {dataRender.map((asset) => (
                  <tr
                    className={`asset_${
                       AssetsList.includes(asset.asset_tag)
                        ? "included"
                        : ""
                    }`}
                    key={asset.id}
                  >
                    <td>{asset.asset_tag.slice(6, 10)}</td>
                    <td>{asset.name}</td>
                    <td>{asset?.serial}</td>
                    <td className="td-actions">
                      <div>
                        <button
                          onClick={() =>
                            ButtonDeleteItem(asset.asset_tag, idUser)
                          }
                          className="button-delete"
                        >
                          X
                        </button>
                        <button
                          onClick={() => ButtonAddItem(asset)}
                          className="button-add"
                        >
                          Ad
                        </button>
                        <button
                          onClick={() => ButtonGetMaintance(asset.id)}
                          className="button-maintance"
                        >
                          <BsTools />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modal3 && (
        <ViewMaintances
          modal={modal3}
          setModal={setModal3}
          dataMaintances={Maintances}
        />
      )}

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
    </>
  );
}

export { AssetsBox };
