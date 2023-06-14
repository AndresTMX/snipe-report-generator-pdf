import { getComponentsWhitComputerSerial } from "../API";
import { useState, useEffect } from "react";
import { useFilterItems } from "./useFilterItems";

function useGetComponents(arrayAssets, stateComponents) {
  const { ArrayResult } = useFilterItems(arrayAssets);

  const [dataComponents, setDataComponents] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (stateComponents) {
      setTimeout(() => {
        // Realizar solicitudes para cada serial
        async function fetchComponents() {
          const requests = ArrayResult.map((serial) => getComponentsWhitComputerSerial(serial));
          const results = await Promise.all(requests);
          setDataComponents(results);
          setLoading(true);
        }
        fetchComponents();
      }, 1500);
    }
  }, [ArrayResult]);

  return { dataComponents, loading };
}
export { useGetComponents };
