import { useEffect, useState } from "react";
import { actionTypes } from "../Context/MaintanceReducer";
import {months, currentDate} from '../Helpers/Date'
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;

function useEditMaintances(maintances, dispatch) {

    const [selectUser, setSelectUser] = useState(null)
    const [selectItem, setSelectItem] = useState(null)
    const assetsForUser = maintances?.length > 0? maintances.filter((item) => item.notes === selectUser): [];
    const [assetsUser, setAssetsUser] = useState(assetsForUser)
   
    const titleMaintance = `Mantenimiento Preventivo ${currentDate.$D} ${months[(currentDate.$M)].month} ${currentDate.$y}`

    useEffect(() => {
        if(maintances?.length>0){
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
    
    const updateMaintance = (index, newData) => {
        const maintance = data[index]
        const newMaintance = [
            ...maintance,
            ...newData
        ]
        setData([...data, newMaintance])
    } 

    const deleteMaintance = (tag) => {
        const newData = data.filter(item.tag != tag)
        setData(newData)
    }

    const states = { selectUser, selectItem, assetsUser }
    const actions = { updateMaintance, deleteMaintance, setSelectItem, setSelectUser }

    return { states, actions }
}

export {useEditMaintances};