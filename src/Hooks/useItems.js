import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { DocContext } from '../Context/DocContext';
import { initialStore, reducer, actionTypes } from '../Context/DocReducer';
import { actionTypes as actionTypesModals } from "../Context/StatesModalsReducer";

function useItems({ idUser, user, company, location, manager, email, department, avatar }) {

  const [state, dispatch] = useContext(DocContext);

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

  const { storageState, loadingState, errorState, saveItem } = useLocalStorage( idUser, Storage );

  const addItem = ( item ) => {
    const stateAssets = storageState.assets;
    const stateAccessories = storageState.accessories;
    const validator = stateAssets ? stateAssets.length : false;

    let newStorage;
    let newCount;

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

  //accessories

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

  const countAssets = storageState.assets ? storageState.assets.length : 0;

  const countAccessories = storageState.accessories ? storageState.accessories.length : 0;

  const states = { storageState, loadingState, errorState, countAssets, countAccessories }

  const actions = { addItem, deleteItem, addAccessories, deleteAccessories };

  return { actions, states };
}

export { useItems };
