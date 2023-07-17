import { useState, useEffect } from "react";
import { getMaintancesAsset } from "../API";
import { useGetAssetsUser } from "./useGetAssetsUser";

function useMaintancesWhitIdAssets(IdUser) {
  const [maintancesForUser, setMaintances] = useState([]);
  const [loadingMaitances, setLoading] = useState(true);
  const [errorMaintance, setError] = useState(false);
  const [listIds, setList] = useState([]);

  const { dataAssets, loading, error, SetGet, get , setError:setErrorGetAssets, setLoading: setLoadingGetAssets } = useGetAssetsUser(IdUser);

  // Este useEffect observa los cambios en dataAssets
  useEffect(() => {
    SetGet(true)
    if (dataAssets && loading && !error) {
      try {
        const AssetsFiltered = dataAssets.filter((asset) => {
          const category = asset.category.name;
          const allowedCategories = ['LAPTOP', 'GABINETE', 'MONITOR', 'TECLADO', 'MOUSE'];
          return allowedCategories.includes(category);
        });

        const filteredIds = AssetsFiltered.map((asset) => ({ id: asset.id }));
        setList(filteredIds);
      } catch (error) {
        setLoadingGetAssets(true)
        setErrorGetAssets(error);
        console.log(error)
      }
    }
  }, [dataAssets, loading, error]); // Dependencias de este useEffect

  useEffect(() => {
    async function fetchMaintances() {
      if (listIds.length > 0) {
        try {
          const promises = listIds.map((asset) => getMaintancesAsset(asset.id));
          const results = await Promise.all(promises);
          const mergedMaintances = results.flat();
          setMaintances([...maintancesForUser, ...mergedMaintances]);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(error);
        }
      } else {
        setLoading(false);
      }
    }

    fetchMaintances();
  }, [listIds]);  

  return { maintancesForUser, loadingMaitances, errorMaintance };
}

export { useMaintancesWhitIdAssets };

