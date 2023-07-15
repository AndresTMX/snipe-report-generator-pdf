import { useState, useEffect } from "react";
import { getMaintancesAsset } from "../API";
import { useGetAssetsUser } from "./useGetAssetsUser";

function useMaintancesWhitIdAssets(IdUser) {
  const [maintancesForUser, setMaintances] = useState([]);
  const [loadingMaitances, setLoading] = useState(true);
  const [errorMaintance, setError] = useState(false);
  const [listIds, setList] = useState([]);

  const { dataAssets, loading, error, SetGet, get } = useGetAssetsUser(IdUser);

  useEffect(() => {
    SetGet(!get)
    if (dataAssets) {
      const AssetsFiltered = dataAssets.filter((asset) => {
        const category = asset.category.name;
        const allowedCategories = ['LAPTOP', 'GABINETE', 'MONITOR', 'TECLADO', 'MOUSE'];
        return allowedCategories.includes(category);
      });
  
      const filteredIds = AssetsFiltered.map((asset) => ({ id: asset.id }));
      setList(filteredIds);
    }
  }, [dataAssets]);

  useEffect(() => {
    const fetchMaintances = async () => {
      try {
        const promises = listIds.map((asset) => getMaintancesAsset(asset.id));
        const results = await Promise.all(promises);
        const mergedMaintances = [].concat(...results);
        setMaintances(mergedMaintances);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    if (listIds.length > 0) {
      fetchMaintances();
    } else {
      setLoading(false);
    }
  }, [listIds]);

  return { maintancesForUser, loadingMaitances, errorMaintance, loading };
}

export { useMaintancesWhitIdAssets };
