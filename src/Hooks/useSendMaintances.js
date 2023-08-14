import { useState } from "react";
import { SendMaintance } from "../API";
import { addMaintance } from "../Helpers/actionsMaintance";

function useSendMaintances( dispatch) {
  
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const postMaintenance = async (arrayMaintances) => {
        try {
          setLoading(true)
          const responses = await Promise.all(arrayMaintances.map(maintance => SendMaintance(maintance)));
          addMaintance(dispatch, responses)
          setLoading(false)
        } catch (error) {
          setError(error);
          setLoading(false);
          throw new Error('Error del post ' + error.message);
        }
      };

    return {postMaintenance, loading, error}


}

export {useSendMaintances};