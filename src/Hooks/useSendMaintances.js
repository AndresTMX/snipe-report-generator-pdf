import { useState } from "react";
import { SendMaintance } from "../API";

function useSendMaintances() {
    const [maintance, setMaintance] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const postMaintenance = async (arrayMaintances) => {
        try {

            for(const  maintance of arrayMaintances ){
                const response = await SendMaintance(maintance)
                setError(false)
                setMaintance(response)
                setLoading(false)
                return response;
            }
            return console.log('Mantenimientos enviados con exito') 
        } catch (error) {
            setError(error)
            setLoading(false)
            throw new  Error('Error al enviar mantenimientos con useState')
        }
    }

    return {postMaintenance, maintance, loading, error}


}

export {useSendMaintances};