import { useEffect, useState } from "react";

function useProgramMaintances(location) {

    const configuration = localStorage.getItem(location);

    const defaultState = [
       {month:'',  status:false},
       {month:'',  status:false},
       {month:'',  status:false}
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
            localStorage.setItem(location.description, JSON.stringify(newConfig))
    }

    const handleMonthChange = (index, selectedMonth) => {
        const updatedConfig = [...configState];
        updatedConfig[index].month = selectedMonth;
        setConfig(updatedConfig);
        saveConfig()
      };

    const ToggleStatus = (index, newStatus) => {
        const updatedConfig = [...configState];
        updatedConfig[index].status = newStatus;
        setConfig(updatedConfig);
        saveConfig()
    }

    return { configState, loading, saveConfig, handleMonthChange, ToggleStatus}
}

export {useProgramMaintances};