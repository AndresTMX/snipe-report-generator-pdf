import { getAssetsUser } from "../API/index";
import { useState } from "react";

function useGetAssetsUser(idUser) {

  const [dataAssets, setDataAssets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return { dataAssets, loading, error, fetchAssetsUser};
}
export { useGetAssetsUser };
