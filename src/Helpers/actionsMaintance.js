import { actionTypes } from "../Context/MaintanceReducer";

export function switchForm (dispatch, payload){
    dispatch({type:actionTypes.setForm, payload: payload})
}

export function validateRepeat(array, index){
   const newList = array.length > 0 ? [...array, index]:[index];
   const validate =  newList.filter(element => element === index);
   if(validate.length  > 1){
    return false
   }else{
    return true
   }
}

export function AddTag(listTag, dispatch, payload){
    const validate = validateRepeat(listTag, payload)
    const newList = listTag.length > 0 ? [...listTag, payload]:[payload];

    if(!validate){
        dispatch({type:actionTypes.setNotification, payload:'Ya agregaste este activo'})
    }else{
        dispatch({type:actionTypes.addTag, payload: newList})
    }
}

export function RemoveTag(listTag, dispatch, payload){
    const validate = validateRepeat(listTag, payload)

    if(validate != ""){
        dispatch({type:actionTypes.setNotification, payload:'Aun no has agregado este activo'})
    }else{
        const newList = listTag.filter(element => element !=  payload);
        dispatch({type:actionTypes.addTag, payload: newList})
    }
}

export function switchNotification(dispatch, payload){
    dispatch({
        type:actionTypes.setNotification,
        payload: payload
    });
}