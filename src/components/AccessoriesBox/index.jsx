import "./accessoriesBox.css";
import { useItems } from "../../Hooks/useItems";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { Notification } from "../../modals/notification";
import {ThreeDots} from "../Loading/";


function AccessoriesBox({
  modal,
  setModal,
  dataAccessories,
  idUser,
  dataUser,
  state,
  loadingAccessorie,
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

  const { addAccessories, deleteAccessories } = actions;

  const { countAccessories } = states;

  const { initialStore, StatesModals } = state;

  const dataRender = dataAccessories || [];
  
  const newDataRender =  dataRender.map((accessorie, index)=> {
    return {...accessorie, index}
  })

  const { storage } = initialStore;

  const AccessoriesList = storage ? storage?.accessories.map((accessorie) => accessorie.index) : [];

  const date = new Date(); // fecha actual
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // agregar ceros a la izquierda si el mes es menor a 10
  const day = date.getDate().toString().padStart(2, '0'); // agregar ceros a la izquierda si el día es menor a 10
  const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

  const AddAccessorie = (item, index) => {

    const stateVerification = JSON.parse(localStorage.getItem(idUser));

    const preState = stateVerification ? stateVerification : false;

    const repeat = preState.accessories? 
    preState.accessories.find((accessorie) => accessorie.index === index):false;

    if (repeat) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Ya haz agregado este accesorio",
      });
    } else {
      const newItem = {
        ...item,
        index
      }
      addAccessories(newItem);
    }
  };

  const DeleteAccessorie = (index) => {

    const repeat = storage.accessories.find((accessorie) => accessorie.index === index);
    let newState

    if(!repeat){
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Aun no agregas este accesorio",
      });
    }else{
      deleteAccessories(index)
    }

  }

  const CloseModal = () => {
    if(storage){
      setModal(!modal);
      dispatch({ type: actionTypesDoc.updateStorage, payload: storage }); 
    }else{
      setModal(!modal);
      const newData = JSON.parse(localStorage.getItem(idUser));
      dispatch({ type: actionTypesDoc.updateStorage, payload: newData }); 
    }
  };


  const GenerateDocument = (typeDocument) => {

    const document = {
        ...storage,
        dateDay: storage.dateDay ? storage.dateDay : formattedDate,
        typeDocument:typeDocument,
        manager: manager,
        complete: true
    };
  
    dispatch({ type: actionTypesDoc.updateStorage, payload: document });

};

  return (
    <>
      <div className="section">
        <div className="container-button close">
          <span className="title">Lista de accesorios</span>
          <button className="button-close" onClick={() => CloseModal()}>
            x
          </button>
        </div>

        <div className="container">
          <span>Accesorios agregados: {countAccessories}</span>
          <div className="container-button">
          <button onClick={()=>GenerateDocument('MP')} className="button-action">Mantenimiento preventivo</button>
          <button onClick={()=>GenerateDocument('MC')} className="button-action">Mantenimiento correctivo</button>
          <button onClick={()=>GenerateDocument('VB')} className="button-action">Baja de equipos</button>
          <button onClick={()=>GenerateDocument('CR')} className="button-action">Carta responsiva</button>
          </div>

          <div>
            <table>
              <tbody className="table-header">
                <tr>
                  <th>ID</th>
                  <th>ACCESORIO</th>
                  <th>MARCA</th>
                  <th>ACCION</th>
                </tr>

                {newDataRender.map((accessorie, index) => (
                  <tr 
                  className={`asset_${
                    AccessoriesList.includes(accessorie.index)
                     ? "included"
                     : ""
                 }`}
                  key={index}>
                    <td>{accessorie.id}</td>
                    <td>{accessorie.name}</td>
                    <td>{accessorie.manufacturer?.name}</td>
                    <td className="td-actions">
                      <div>
                        <button 
                        onClick={() => DeleteAccessorie(index)}
                        className="button-delete">X</button>
                        <button
                          onClick={() => AddAccessorie(accessorie, index)}
                          className="button-add"
                        >
                          Ad
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

      { newDataRender.length === 0 && loadingAccessorie && (
        <div className="container-loading">
          <h2>Sin accesorios registrados</h2>
        </div>
      )}

      {!loadingAccessorie && (
        <div className="container-loading">
          <ThreeDots />
        </div>
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

export { AccessoriesBox };
