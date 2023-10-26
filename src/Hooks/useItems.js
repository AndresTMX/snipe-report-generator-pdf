//importacion del hook de contexto
import { useContext } from "react";
//importacion del hook de useLocalStorage
import { useLocalStorage } from "./useLocalStorage";
//importacion del contexto del documento
import { DocContext } from '../Context/DocContext';
//importacion de las actiones del documento
import { actionTypes } from '../Context/DocReducer';
//importacion de las acciones del modal de la pagina del documento
import { actionTypes as actionTypesModals } from "../Context/StatesModalsReducer";

function useItems({ idUser, user, company, location, manager, email, department, avatar }) {

  const [state, dispatch] = useContext(DocContext);
//estado inicial del alamcenamiento de un usuario
  const Storage = {
    idUser,
    user,
    company,
    location,
    assets: [],
    accessories: [],
    components: [],
    countAssets: 0,
    countAccessories: 0,
    countComponents: 0,
    manager,
    email,
    department,
    coment: '',
    dateDay: '',
    avatar,
    typeDocument:'',
    checkComponents: false,
    becario: false,
    complete: false,
  };
//el hook de localstorage recibe el id del usuario y el estado inicial y devuelve estados y funcion actualizadora
  const { storageState, loadingState, errorState, saveItem } = useLocalStorage( idUser, Storage );

  //Funciones para agregar y eliminar activos

  const addItem = ( item ) => {
    //recupero activos almacenados en almacenamiento local
    const stateAssets = storageState.assets;
    //recupero accesorios almacenados en almacenamiento local
    const stateAccessories = storageState.accessories;
    //compruebo si hay elementos almacenados
    const validator = stateAssets ? stateAssets.length : false;

    let newStorage;
    let newCount;

    /*/
    Si no hay elementos almacenados actualizamos assets con un array con el item dentro

    La funcion actualiza multiples campos cuando se agrega un activo, 
    con el proposito de lograr una actualizacion uniforme en todos los
    lugares de la aplicacion

    Si hay multiples elementos, actualizamos assets con un array que ésta contiene
    los elementos ya almacenados previamente y el elemento agregado 
    /*/

    if (!validator) {
      newStorage = {
        ...Storage,
        assets: [item],
        accessories: stateAccessories ? stateAccessories : [],
        countAccessories: stateAccessories ? stateAccessories.length : 0,
        countAssets: 1,
      };
      saveItem(newStorage);
      dispatch({ type: actionTypes.updateStorage, payload: newStorage })
    } else {
      newCount = storageState.countAssets + 1;
      newStorage = {
        ...Storage,
        assets: [...stateAssets, item],
        accessories: stateAccessories ? stateAccessories : [],
        countAccessories: stateAccessories ? stateAccessories.length : 0,
        countAssets: newCount,
      };
      saveItem(newStorage);
      dispatch({ type: actionTypes.updateStorage, payload: newStorage })
    }
  };

  const deleteItem = (tag) => {

    const newData = JSON.parse(localStorage.getItem(idUser))

    const stateAssets = storageState.assets;

    const validator = stateAssets ? stateAssets.find(asset => asset.asset_tag === tag) : false;

    let newStorage;

    if (!validator || !stateAssets.length) {
      dispatch({ type: actionTypesModals.setModalNotification, payload: 'Aun no has agregado este activo' })
    } else {
      const newAssets = newData.assets.filter(asset => asset.asset_tag !== tag);
      const newCount = newAssets.length > 0 ? newAssets.length : 0;


      newStorage = {
        ...storageState,
        assets: newAssets,
        countAssets: newCount,
        accessories: newData?.accessories,
        countAccessories: newData?.countAccessories
      };

      dispatch({ type: actionTypes.updateStorage, payload: newStorage })
      saveItem(newStorage);

    }
  };

  //Funciones para agregar y eliminar accesorios

  const addAccessories = (item) => {
    const stateAccessories = storageState ? storageState.accessories : [];
    const stateAssets = storageState ? storageState.assets : [];

    const validator = stateAccessories ? stateAccessories.length : false;

    let newStorage;
    let newCount;

    if (!validator) {
      newStorage = {
        ...Storage,
        accessories: [item],
        countAccessories: 1,
        assets: stateAssets,
        countAssets: stateAssets ? stateAssets.length : 0
      };
      saveItem(newStorage);
      dispatch({ type: actionTypes.updateStorage, payload: newStorage })
    } else {
      newCount = storageState.countAccessories + 1;
      newStorage = {
        ...Storage,
        accessories: [...stateAccessories, item],
        countAccessories: newCount,
        assets: stateAssets,
        countAssets: stateAssets ? stateAssets.length : 0
      };
      saveItem(newStorage);
      dispatch({ type: actionTypes.updateStorage, payload: newStorage })
    }
  }

  const deleteAccessories = (accesorieIndex) => {
    const newData = JSON.parse(localStorage.getItem(idUser));
    
    const stateAccessories = newData.accessories;

    let newStorage;

    const newCount = countAccessories - 1;

    const newAccessories = stateAccessories.filter(
      (accessorie, index) => accessorie.index != accesorieIndex
    );

    newStorage = {
      ...storageState,
      accessories: newAccessories,
      countAccessories: newCount,
      assets: newData?.assets,
      countAssets: newData?.countAssets,
    };

    dispatch({ type: actionTypes.updateStorage, payload: newStorage });
    saveItem(newStorage);
  };
  
  //conteo de activos que tiene agregados el usuario
  const countAssets = storageState.assets ? storageState.assets.length : 0;
  //conteo de los accesorios que tiene agregado el usuario
  const countAccessories = storageState.accessories ? storageState.accessories.length : 0;
  //estados que devuelve el hook hechos objeto para destructurarlos despues
  const states = { storageState, loadingState, errorState, countAssets, countAccessories }
  //funciones que devuelve el hoook hechos objeto para destructurarla despues
  const actions = { addItem, deleteItem, addAccessories, deleteAccessories };

  return { actions, states };
}

export { useItems };
