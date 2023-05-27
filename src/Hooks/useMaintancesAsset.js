import { getMaintancesAsset } from "../API/index";
import { useState, useEffect } from "react";

function useMaintancesAssets() {

  const [idAsset, setidAsset] = useState(null)  
  const [dataMaintances, setDataMaintances] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const getMaintenancesForAsset = async (id) => {
    setLoading(true);
    const data = await getMaintancesAsset(id);
    setDataMaintances(data);
    setLoading(false);
  };

  useEffect(() => {
    if (idAsset !== null) {
      getMaintenancesForAsset(idAsset);
    }
  }, [idAsset]);

  const Maintances = dataMaintances || [];

  return { Maintances, dataMaintances, loading, idAsset, setidAsset };
}
export { useMaintancesAssets };
