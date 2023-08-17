import { useEffect, useState } from "react";

function useProgramMaintances(location) {

    const configuration = localStorage.getItem(location.description);

    const defaultState = {
        monthOne:'',
        monthTwo: '',
        monthThre: ''
    }

    const [configState, setConfig] = useState(defaultState)

    useEffect(() => {
        if(configuration){
            setConfig(JSON.parse(configuration))
        }
    }, [])


    const saveConfig = () => {
        if(configuration){
            const oldConfig = JSON.parse(configuration)
            const newConfig = {
                ...oldConfig,
                ...configState
            }
            localStorage.setItem(location.description, JSON.stringify(newConfig))
            console.log('ya habia  configuracion, configuracion modificada:')
            console.log(newConfig)
        }else{
            localStorage.setItem(location.description, JSON.stringify(configState))
            console.log('no habia configuracion')
            console.log(configState)
        }
    }

    return { configState, saveConfig, setConfig}
}

export {useProgramMaintances};