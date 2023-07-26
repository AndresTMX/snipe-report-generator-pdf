import { useState } from "react";
import { SendMaintance } from "../API";

function useSendMaintances() {
    const [maintance, setMaintance] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const postMaintenance = async (arrayMaintances) => {
        try {
          for (const item of arrayMaintances) {
            const data = {
              title:item.title,
              asset_id:item.asset_id,
              asset_maintenance_type:item.asset_maintenance_type,
              supplier_id:item.supplier_id,
              start_date:item.start_date,
              completion_date:item.completion_date
              }
            const response = await SendMaintance(data);
            console.log(response)
            setError(false);
            setMaintance(response);
            setLoading(false);
          }
          console.log('Mantenimientos enviados con éxito');
        } catch (error) {
          setError(error);
          setLoading(false);
          throw new Error('Error de useState' + error.message);
        }
      };

    return {postMaintenance, maintance, loading, error}


}

export {useSendMaintances};