import { useState } from "react";

function useProgramMaintances(location) {

    const configuration = localStorage.getItem(location.value);

    const [configState, setConfig] = useState({
        monthOne:'',
        monthTwo: '',
        monthThre: ''
    })


    const saveConfig = () => {
        if(configuration){
            const oldConfig = JSON.parse(configuration)
            const newConfig = {
                ...oldConfig,
                ...configState
            }
            // localStorage.setItem(location.description, JSON.stringify(newConfig))
            console.log('ya habia  configuracion, configuracion modificada:')
            console.log(newConfig)
        }else{
            // localStorage.setItem(location.description, JSON.stringify(config))
            console.log('no habia configuracion')
            console.log(configState)
        }
    }

    return { configState, configuration, saveConfig, setConfig}
}

export {useProgramMaintances};