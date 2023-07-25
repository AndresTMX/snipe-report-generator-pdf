import { actionTypes } from "../Context/MaintanceReducer";

export function switchForm (dispatch, payload){
    dispatch({type:actionTypes.setForm, payload: payload})
}

export function validateRepeat(array, index){
   const newList = array.length > 0 ? [...array, index]:[index];
   const validate =  newList.filter(element => element.tag === index.tag);
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
        const newList = listTag.filter(element => element.tag !=  payload.tag);
        dispatch({type:actionTypes.addTag, payload: newList})
    }
}

export function switchNotification(dispatch, payload){
    dispatch({
        type:actionTypes.setNotification,
        payload: payload
    });
}

export function costMaintance(item){

    let cost

    if(item.category === "LAPTOP"){
        cost = 300
    }

    if(item.category === "GABINETE"){
        cost = 250
    }

    if(item.category === "MONITOR"){
        cost = 50
    }

    if(item.category === "TECLADO" ||  item.category === "MOUSE"){
        cost = 25
    }

    return cost
}

export function builderMaintance(dataMaintances) {
    
    const { title, data, supplier_id, start_date, completion_date} = dataMaintances;

    const maintances = data.map((asset) => ({
        title:title,
        asset_id:asset.id,
        supplier_id:supplier_id,
        start_date:start_date,
        completion_date:completion_date,
    }))

    return maintances

}