import { getAssetsUser } from "../API/index";
import { useState, useEffect } from "react";

function useGetAssetsUser(idUser) {
  const [get, SetGet] = useState(false);
  const [dataAssets, setDataAssets] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (get) {
      //obteninedo activos del usuario
      setTimeout(()=> {
        const fetchAssetsUser = async () => {
        const result = await getAssetsUser(idUser);
        setDataAssets(result);
        setLoading(true);
      };
      fetchAssetsUser();
      }, 2000)
      
    }
  }, [get, idUser]);

  return { dataAssets, idUser, loading, get, SetGet };
}
export { useGetAssetsUser };
