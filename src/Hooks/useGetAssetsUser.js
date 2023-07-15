import { getAssetsUser } from "../API/index";
import { useState, useEffect } from "react";

function useGetAssetsUser(idUser) {
  const [get, SetGet] = useState(false);
  const [dataAssets, setDataAssets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (get) {
      //obteninedo activos del usuario
      const fetchAssetsUser = async () => {
        try {
          const result = await getAssetsUser(idUser);
          setDataAssets(result);
          setLoading(true);
        } catch (error) {
          setError(error);
          setLoading(true);
        }
      };
      fetchAssetsUser();
    }
  }, [get, idUser]);

  return { dataAssets, idUser, loading, get, SetGet , error};
}
export { useGetAssetsUser };
