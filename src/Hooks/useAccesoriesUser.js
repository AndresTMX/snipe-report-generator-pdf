import { getAccesoriesUser } from "../API/index";
import { useState, useEffect } from "react";

function usegetAccesoriesUser(idUser) {
  const [Aget, getAccesories] = useState(false);
  const [dataAccesories, setDataAccesories] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Aget) {
      //obteninedo accesorios del usuario
      const fetchAccesoriesUSer = async () => {
        const result = await getAccesoriesUser(idUser);
        setDataAccesories(result);
        setLoading(true);
      };
      fetchAccesoriesUSer();
    }
  }, [Aget, idUser]);

  return { dataAccesories, loading, Aget, getAccesories };
}
export { usegetAccesoriesUser };
