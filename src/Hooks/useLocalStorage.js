import {useEffect, useReducer} from 'react';
import { initialStore, reducer, actionTypes } from '../Context/DocReducer'; 


function useLocalStorage ( nameStorage, initialValue ) {

    const [state, dispatch] = useReducer(reducer, initialStore({initialValue}));

    useEffect(()=> {
            try {
                const MyLocalStore = localStorage.getItem(nameStorage);

                let MyLocalStorageInJson;

                if(!MyLocalStore){
                    localStorage.setItem(nameStorage, JSON.stringify(initialValue));
                    MyLocalStorageInJson = initialValue;
                }else{
                    MyLocalStorageInJson = JSON.parse(MyLocalStore);
                }

               dispatch({type:actionTypes.updateStorage , payload: MyLocalStorageInJson });
               dispatch({type:actionTypes.setLoading, payload: true });
            } catch (error) {
                dispatch({ type: actionTypes.setError, payload: error });
            }
    },[state.initialStore]);

    const saveItem = (newItem) => {
        try {
            const ItemInString = JSON.stringify(newItem);
            localStorage.setItem(nameStorage, ItemInString);
            dispatch({type:actionTypes.updateStorage , payload: newItem });
        } catch (error) {
            dispatch({ type: actionTypes.setError, payload: error });
        }
    };



    const storageState = state.storage;
    const loadingState = state.loading;
    const errorState = state.error;

    return { storageState, loadingState, errorState, saveItem }

}

export {useLocalStorage};