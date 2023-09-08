import { useEffect, useState } from "react";
import { actionTypes } from "../Context/MaintanceReducer";
import {months, currentDate} from '../Helpers/Date'
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;

function useEditMaintances(maintances, dispatch, typeItem) {

    const [selectUser, setSelectUser] = useState(null)
    const titleMaintance = `Mantenimiento Preventivo ${currentDate.$D} ${months[(currentDate.$M)].month} ${currentDate.$y}`

    useEffect(() => {
        if(maintances?.length > 0 && typeItem){
           const datadfault =  maintances.map((item) => ({
                ...item,
                item_id:item.id,
                notes:item.user,
                supplier_id:parseInt(providerMaintenance),
                title:!item?.title? titleMaintance: item.title,
                start_date:!item?.start_date? currentDate: item.start_date,
                item_maintenance_type: !item?.type? 'Preventivo': item.type,
                completion_date:!item?.completion_date? currentDate: item.completion_date, 
            }))
            dispatch({type: actionTypes.setMaintances, payload: datadfault})
        }
    },[])
    
    const updateMaintance = (index, tagItem, newData,) => {
        const maintance = maintances.find((item) => item.tag === tagItem)
        const maintanceIndex = maintances.findIndex((item) => item.tag === tagItem)
        const {title, item_maintenance_type, start_date, completion_date} = newData
        const item = {
            title,
            item_maintenance_type,
            start_date,
            completion_date
        }
        const newState = [...maintances]
        newState[maintanceIndex] = {...maintance,...item}
        dispatch({type: actionTypes.setMaintances, payload: newState })
        
    }

    const states = { selectUser, typeItem }
    const actions = { updateMaintance, setSelectUser }

    return { states, actions }
}

export {useEditMaintances};