import { useState } from "react";
import { SendMaintance } from "../API";

function useSendMaintances() {
    const [maintance, setMaintance] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const postMaintenance = async (arrayMaintances) => {
        try {
          for (const item of arrayMaintances) {
            const response = await SendMaintance(item);
            setError(false);
            setMaintance(response);
            setLoading(false);
          }
          console.log('Mantenimientos enviados con éxito');
        } catch (error) {
          setError(error);
          setLoading(false);
        //   throw new Error('Error de useState' + error.message);
        }
      };

    return {postMaintenance, maintance, loading, error}


}

export {useSendMaintances};