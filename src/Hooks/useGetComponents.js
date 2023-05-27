import { getComponentsWhitComputerSerial } from '../API';
import { useState, useEffect } from 'react';
import { useFilterItems } from './useFilterItems';

function useGetComponents(arrayAssets, check) {

    const {ArrayResult} = useFilterItems(arrayAssets);    

    const [dataComponents, setDataComponents] = useState();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      if (check) {
        // Realizar solicitudes para cada serial
      const fetchComponents = async () => {
        const requests = ArrayResult.map(serial => getComponentsWhitComputerSerial(serial));
        const results = await Promise.all(requests);
        setDataComponents(results);
        setLoading(true);
      };
      fetchComponents();
      }
    }, [check]);
  
    return { dataComponents, loading };
  }
  export { useGetComponents };