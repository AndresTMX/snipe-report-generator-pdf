import { useEffect, useState } from "react";
import { actionTypes } from "../Context/MaintanceReducer";
import { ToggleItem } from "../Helpers/actionsMaintance";
import {months, currentDate} from '../Helpers/Date'
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;
/*/
 Este hook sirve para eidtar los mantenimientos agregados desde la pagina 
 de mantenimientos, en la seccion de subir mantenimientos y en la seccion
 de generar programa.

 Recibe un array con los mantenimientos, que posteriormente formatea con
 los campos necesarios para enviar un mantenimiento haciendo uso de un map
 y despues actualiza los mantenimientos en el estado global.

 Recibe una funcion dispatch que sirve sirve para actualizar el estado global

 Recibe un valor booleano nombrado como editable
 editable = true | false
 Si es true podras editar los mantenimientos de lo contrario será imposible

/*/
function useEditMaintances(maintances, dispatch, editable) {
    //este estado hace posible la iteracion de este useEffect cada
    // vez que agregamos un activo mediante el toggle en el minisearcher
    const [update,setUpdate] = useState(false)
    //Este estado almacena el usuario seleccionado
    const [selectUser, setSelectUser] = useState(null)
    const titleMaintance = `Mantenimiento Preventivo ${currentDate.$D} ${months[(currentDate.$M)].month} ${currentDate.$y}`
    const titleMaintancePendent = `Mantenimiento Pendiente ${currentDate.$D} ${months[(currentDate.$M)].month} ${currentDate.$y}`
    //Este estado gestiona la aparicion del boton de edicion de todos los usuarios
    const [editAll, setEditAll] = useState(false)

    useEffect(() => {

        if(maintances?.length > 0 ){
            
            const datadfault =  maintances.map((item, index) => ({
                ...item,
                id:item.id,
                notes:item.user,
                supplier_id:parseInt(providerMaintenance),
                title:!item?.title? titleMaintance: item.title,
                start_date:!item?.start_date? currentDate: item.start_date,
                asset_maintenance_type: !item.asset_maintenance_type? 'Preventivo': item.asset_maintenance_type,
                completion_date:!item?.completion_date? currentDate: item.completion_date,
                editable: item.editable? item.editable:editable
            }))
            dispatch({type: actionTypes.setMaintances, payload: datadfault})
        }

        
    },[update])

    /*/
    updateAllMaintances es una funcion que edita todos los campos
    de todos los mantenimientos, edita el tipo, titulo, fecha de inicio y fin
    /*/
    const updateAllMaintances = (type, title, dateInit, dateEnd) => {

        const datadfault =  maintances.map((item, index) => ({
            ...item,
            id:item.id,
            notes:item.user,
            supplier_id:parseInt(providerMaintenance),
            title:title,
            start_date:dateInit,
            asset_maintenance_type: type,
            completion_date:dateEnd,
            editable: editable
        }))
        dispatch({type: actionTypes.setMaintances, payload: datadfault})

    }
    /*/
    updateMaintance es una funcion que edita todos los campos
    del mantenimiento, edita el tipo, titulo, fecha de inicio y fin
    /*/
    const updateMaintance = (index, tagItem, newData,) => {
        const maintance = maintances.find((item) => item.tag === tagItem)
        const maintanceIndex = maintances.findIndex((item) => item.tag === tagItem)
        const {title, asset_maintenance_type, start_date, completion_date} = newData
        const item = {
            title,
            asset_maintenance_type,
            start_date,
            completion_date
        }
        const newState = [...maintances]
        newState[maintanceIndex] = {...maintance,...item}
        dispatch({type: actionTypes.setMaintances, payload: newState })
        
    }
    /*/
    Toggle es una funcion que recibe un nuevo item y lo agrega o elimina a los 
    mantenimientos, dandole un formato por default.

    Esta funcion se usa para agregar o eliminar mantenimientos desde el miniSearcher 
    /*/
    const Toggle = (newItem) => {

        const item = {
            tag:newItem.asset_tag,
            id:newItem.id,
            device:newItem.category.name,
            user:newItem?.assigned_to?.name,
            supplier_id:parseInt(providerMaintenance),
            title:titleMaintancePendent,
            start_date:currentDate,
            asset_maintenance_type:"Pendiente",
            completion_date:currentDate,
            company:newItem.company.name,
            location:newItem.location.name,
            cost:0,
            editable:true,
        }

        ToggleItem(maintances, dispatch, item)
        setUpdate(!update)

    }

    const states = { selectUser, editable,  titleMaintance, currentDate, editAll }
    const actions = { updateMaintance, setSelectUser, Toggle, setEditAll, updateAllMaintances }

    return { states, actions }
}

export {useEditMaintances};