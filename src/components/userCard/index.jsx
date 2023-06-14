import "./userCard.css";
import { useState } from "react";
import { ViewItems } from "../ViewItems";
import { AssetsBox } from "../AssetsBox";
import { Modal } from "../../modals/modal";
import { useGetAssetsUser } from "../../Hooks/useGetAssetsUser";
import { UseModal } from "../../Hooks/useModal";
import { AccessoriesBox } from "../AccessoriesBox";
import {LicensesBox} from '../LicensesBox';
//icons
import { BsHeadset } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import {ImKey} from 'react-icons/im';
//helper
import transfromValues from "../../Helpers/textFormat";
//hooks
import {useImagePDF} from '../../Hooks/useImagePDF';
import { usegetAccesoriesUser } from "../../Hooks/useAccesoriesUser";

function UserCard({
  id,
  user,
  department,
  manager,
  avatar,
  location,
  company,
  accesories,
  licences,
  assets,
  email,
  state,
  jobtitle,
  dispatch
}) {

  const { nameUser, nameCompany, namedepartment, nameLocation, nameManager, nameJobtitle } = transfromValues(user, company, department, location, manager, jobtitle)

  const { dataAssets, get, SetGet, idUser, loading } = useGetAssetsUser(id);  
  const { dataAccesories, Aget, getAccesories, loadingAccessorie } = usegetAccesoriesUser(id);
  const { modal, setModal, modal2, setModal2, modal3, setModal3 } = UseModal();
  const [dataUser, setDataUser] = useState({
    user: "",
    company: "",
    location: "",
    manager:"",
    email:"",
    department:"",
  });

  const {image} = useImagePDF(nameCompany);

  const ButtongetActives = () => {
    SetGet(!get);
    setModal(!modal);
    setDataUser({ user: nameUser, company: nameCompany, location: nameLocation , manager: nameManager , email, department: namedepartment});
  };

  const ButtongetAccesories = () => {
    getAccesories(!Aget);
    setModal2(!modal2);
    setDataUser({ user: nameUser, company: nameCompany, location: nameLocation , manager: nameManager , email, department: namedepartment});
  };

  const ButtongetMoreInfoUser = () => {
    setModal3(!modal3)
  };

  return (
    <>
      <div className="card">
        <picture>
          <img alt="image" src={image? image: avatar} />
        </picture>

        <div className="card-info-container">
          <p>ID:{id}</p>
          <p>{nameUser}</p>
          <span>Puesto</span>
          <p>{nameJobtitle}</p>
          <span>Empresa</span>
          <p>{nameCompany}</p>
          <span>Jefe inmediado</span>
          <p>{nameManager} </p>
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
            title="Licencias"
            onClick={() => ButtongetMoreInfoUser()}
          >
            <ImKey />
            {licences}
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
              idUser={id}
              dataUser={dataUser}
              state={state}
              loadingAssets={loading}
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
              loadingAccessorie={loadingAccessorie}
              dispatch={dispatch}
            />
          </ViewItems>
        </Modal>
      )}

      {modal3 && (
        <Modal>
          <ViewItems>
             <LicensesBox idUser={id} closeBox={ButtongetMoreInfoUser} />
          </ViewItems>
        </Modal>
      )}
    </>
  );
}

export { UserCard };
