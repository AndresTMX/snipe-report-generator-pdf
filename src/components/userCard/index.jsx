import "./userCard.css";
import { useState } from "react";
import { ViewItems } from "../ViewItems";
import { AssetsBox } from "../AssetsBox";
import { Modal } from "../../modals/modal";
import { useGetAssetsUser } from "../../Hooks/useGetAssetsUser";
import { UseModal } from "../../Hooks/useModal";
import { BsHeadset } from "react-icons/bs";
import { FaDesktop, FaUserCircle } from "react-icons/fa";
import { usegetAccesoriesUser } from "../../Hooks/useAccesoriesUser";
import { AccessoriesBox } from "../AccessoriesBox";
//helper
import transfromValues from "../../Helpers/textFormat";

function UserCard({
  id,
  user,
  department,
  manager,
  avatar,
  location,
  company,
  accesories,
  assets,
  email,
  state,
  dispatch
}) {

  const { nameUser, nameCompany, namedepartment, nameLocation, nameManager } = transfromValues(user, company, department, location, manager)

  const { dataAssets, get, SetGet, idUser } = useGetAssetsUser(id);  
  const { dataAccesories, Aget, getAccesories } = usegetAccesoriesUser(id);
  const { modal, setModal, modal2, setModal2 } = UseModal();
  const [dataUser, setDataUser] = useState({
    user: "",
    company: "",
    location: "",
    manager:"",
    email:"",
    department:"",
  });

  const ButtongetActives = () => {
    SetGet(!get);
    setModal(!modal);
    setDataUser({ user: user, company: nameCompany, location: nameLocation , manager: nameManager , email, department: namedepartment});
  };

  const ButtongetAccesories = () => {
    getAccesories(!Aget);
    setModal2(!modal2);
    setDataUser({ user: user, company: nameCompany, location: nameLocation , manager: nameManager , email, department: namedepartment});
  };

  const ButtongetMoreInfoUser = () => {};

  return (
    <>
      <div className="card">
        <picture>
          <img alt="image" src={avatar} />
        </picture>

        <div className="card-info-container">
          <p>ID:{id}</p>
          <p>{nameUser}</p>
          <span>Empresa</span>
          <p>{nameCompany}</p>
          <span>Departamento</span>
          <p>{namedepartment} </p>
          <span>Ubicación</span>
          <p>{nameLocation}</p>

        </div>

        <div className="card-buttons-container">
          <button title="Activos" onClick={() => ButtongetActives()}>
            <FaDesktop />
            {assets}
          </button>
          <button title="Accesorios" onClick={() => ButtongetAccesories()}>
            <BsHeadset />
            {accesories}
          </button>
          <button
            title="Informacion de usuarios"
            onClick={() => ButtongetMoreInfoUser()}
          >
            <FaUserCircle />
          </button>
        </div>
      </div>

      {modal && (
        <Modal>
          <ViewItems>
            <AssetsBox
              modal={modal}
              setModal={setModal}
              dataAssets={dataAssets}
              idUser={idUser}
              dataUser={dataUser}
              state={state}
              dispatch={dispatch}
            />
          </ViewItems>
        </Modal>
      )}

      {modal2 && (
        <Modal>
          <ViewItems>
            <AccessoriesBox
              modal={modal2}
              setModal={setModal2}
              dataAccessories={dataAccesories}
              idUser={idUser}
              dataUser={dataUser}
              state={state}
              dispatch={dispatch}
            />
          </ViewItems>
        </Modal>
      )}
    </>
  );
}

export { UserCard };
