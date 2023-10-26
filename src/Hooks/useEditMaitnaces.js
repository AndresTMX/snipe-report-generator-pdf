import { useEffect, useState } from "react";
import { actionTypes } from "../Context/MaintanceReducer";
import { ToggleItem } from "../Helpers/actionsMaintance";
import {months, currentDate} from '../Helpers/Date'
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;

function useEditMaintances(maintances, dispatch, typeItem) {
  
    const [update,setUpdate] = useState(false)
    const [selectUser, setSelectUser] = useState(null)
    const titleMaintance = `Mantenimiento Preventivo ${currentDate.$D} ${months[(currentDate.$M)].month} ${currentDate.$y}`
    const titleMaintancePendent = `Mantenimiento Pendiente ${currentDate.$D} ${months[(currentDate.$M)].month} ${currentDate.$y}`
    const [editAll, setEditAll] = useState(false)

    useEffect(() => {

        const editable = typeItem

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
            editable: true
        }))
        dispatch({type: actionTypes.setMaintances, payload: datadfault})

    }
    
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

    const states = { selectUser, typeItem,  titleMaintance, currentDate, editAll }
    const actions = { updateMaintance, setSelectUser, Toggle, setEditAll, updateAllMaintances }

    return { states, actions }
}

export {useEditMaintances};