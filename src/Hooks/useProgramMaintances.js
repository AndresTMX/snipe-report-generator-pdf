import { useEffect, useState } from "react";
import { months } from "../Helpers/Date";

function useProgramMaintances(location) {

    const configuration = localStorage.getItem(location);

    const defaultState = [
       {monthProgram:'',  status:false, monthComplete:''},
       {monthProgram:'',  status:false, monthComplete:''},
       {monthProgram:'',  status:false, monthComplete:''}
    ]

    const [configState, setConfig] = useState(defaultState)
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        if(configuration){
            setConfig(JSON.parse(configuration))
        }
        setTimeout(() => {            
            setLoading(false)
        },1000)
    }, [])


    const saveConfig = () => {
            const newConfig = [...configState]
            localStorage.setItem(location, JSON.stringify(newConfig))
    }

    const handleMonthChange = (index, selectedMonth) => {
        const updatedConfig = [...configState];
        updatedConfig[index].monthProgram = selectedMonth;
        setConfig(updatedConfig);
        saveConfig()
      };

    const ToggleStatus = (index, newStatus) => {
        const updatedConfig = [...configState];
        updatedConfig[index].status = newStatus;
        setConfig(updatedConfig);
        saveConfig()
    }

    const updateMonthComplete = (index, numMonth) => {
        const updatedConfig = [...configState];
        const dataMonth = months.find((item) => item.num === numMonth)
        updatedConfig[index].monthComplete = dataMonth.month;
        setConfig(updatedConfig);
        saveConfig()
    }

    return { configState, loading, saveConfig, handleMonthChange, ToggleStatus, updateMonthComplete}
}

export {useProgramMaintances};