import { getComponentsWhitComputerSerial } from "../API";
import { useState, useEffect } from "react";
import { useFilterItems } from "./useFilterItems";

function useGetComponents(arrayAssets, stateComponents) {
  const { ArrayResult } = useFilterItems(arrayAssets);

  const [dataComponents, setDataComponents] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (stateComponents) {
      // Realizar solicitudes para cada serial
      async function fetchComponents() {
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          const requests = ArrayResult.map((serial) => getComponentsWhitComputerSerial(serial));
          const results = await Promise.all(requests);
          setDataComponents(results);
          setLoading(true);
        } catch (error) {
          setError(error);
          setLoading(true);
        }
      }
      fetchComponents();
    }
  }, [ArrayResult]);

  return { dataComponents, loading };
}
export { useGetComponents };
