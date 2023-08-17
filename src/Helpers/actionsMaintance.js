import { actionTypes } from "../Context/MaintanceReducer";
import {transformText} from '../Helpers/textFormat'

export function filterResults (results){
   const categories = ["LAPTOP", "GABINETE", "MONITOR", "TECLADO", "MOUSE"]
   return results.filter((result) => categories.includes(result.category.name));
}

export function switchForm (dispatch, payload){
    dispatch({type:actionTypes.setformSendMaintances, payload: payload})
}

export function switchDocument (dispatch, payload){
    dispatch({type:actionTypes.setformGenerateDocument, payload:payload})
}

export function validateRepeat(array, index){
   const newList = array.length > 0 ? [...array, index]:[index];
   const validate =  newList.filter(element => element.tag === index.tag);
   if(validate.length > 1){
    return true
   }else{
    return false
   }
}

export function AddMaintances(listTag, dispatch, payload){
    const newList = listTag.length > 0 ? [...listTag, payload]:[payload];
    dispatch({type:actionTypes.setMaintances, payload: newList})
    
}

export function RemoveMaintances(listTag, dispatch, payload){
    const newList = listTag.filter(element => element.tag !=  payload.tag);
    dispatch({type:actionTypes.setMaintances, payload: newList})
    
}

export function ToggleItem(listTag, dispatch, payload){

    const validate = validateRepeat(listTag, payload)

    if(!validate){
        AddMaintances(listTag, dispatch, payload)
    }else{
        RemoveMaintances(listTag, dispatch, payload)
    }

}

export function ClearMaintances(dispatch){
    dispatch({type: actionTypes.setMaintances, payload: []})
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

export  function transformDate(date) {

    const fechaFormateada = date.format('YYYY-MM-DD');
    const horaFormateada = date.format('HH:mm:ss'); 
    return `${fechaFormateada} ${horaFormateada}`;

}

export function builderMaintance(dataMaintances) {
    
    const { title, data, type , supplier_id, start_date, completion_date} = dataMaintances;

    const maintances = data.map((asset) => ({
        title:title,
        asset_id:asset.id,
        cost: costMaintance(asset),
        notes:asset.user,
        asset_maintenance_type: type,
        supplier_id:supplier_id,
        start_date:start_date,
        completion_date:completion_date,
    }))

    return maintances

}

export function assetsForUser (array, property) {
    const groups = {} 
    array.forEach(obj => {
     const propValue = obj[property];
     if(!groups[propValue]){
         groups[propValue] = []
     }
     groups[propValue].push(obj)
    })

    return Object.values(groups);
 }

export function switchViewDocument (dispatch, payload) {
    dispatch({
        type:actionTypes.setDocument,
        payload
    })
}

export function extractNameCompany (maintances){

    const user = maintances[0]

    const company = user.company
    
    return transformText(company)

}

export function extractLocation (maintances){

    const user = maintances[0]

    const location = user.location
    
    return location

}

