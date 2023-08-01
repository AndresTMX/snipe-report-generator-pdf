import { getMaintancesAsset } from "../API/index";
import { useState, useEffect } from "react";

function useMaintancesAssets(idAsset) {

  const [dataMaintances, setDataMaintances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const getMaintances = async () => {
      try {
        const maintance = await getMaintancesAsset(idAsset);
        setDataMaintances(maintance);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getMaintances();

  }, [idAsset]);


  return { dataMaintances, loading, error };
}
export { useMaintancesAssets };
