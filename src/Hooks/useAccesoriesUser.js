import { getAccesoriesUser } from "../API/index";
import { useState, useEffect } from "react";

function usegetAccesoriesUser(idUser) {
  const [Aget, getAccesories] = useState(false);
  const [dataAccesories, setDataAccesories] = useState(null);
  const [loadingAccessorie, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Aget) {
      //obteninedo accesorios del usuario
      const fetchAccesoriesUSer = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          const result = await getAccesoriesUser(idUser);
          setDataAccesories(result);
          setLoading(true);
        } catch (error) {
          setError(error)
          setLoading(true);
        }
      };
      fetchAccesoriesUSer();
    }
  }, [Aget, idUser]);

  return { dataAccesories, loadingAccessorie, Aget, getAccesories };
}
export { usegetAccesoriesUser };
