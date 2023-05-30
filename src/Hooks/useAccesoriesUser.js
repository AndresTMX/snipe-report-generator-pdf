import { getAccesoriesUser } from "../API/index";
import { useState, useEffect } from "react";

function usegetAccesoriesUser(idUser) {
  const [Aget, getAccesories] = useState(false);
  const [dataAccesories, setDataAccesories] = useState(null);
  const [loadingAccessorie, setLoading] = useState(false);

  useEffect(() => {
    if (Aget) {
     setTimeout(()=> {
       //obteninedo accesorios del usuario
       const fetchAccesoriesUSer = async () => {
        const result = await getAccesoriesUser(idUser);
        setDataAccesories(result);
        setLoading(true);
      };
      fetchAccesoriesUSer();
     },2000)
    }
  }, [Aget, idUser]);

  return { dataAccesories, loadingAccessorie, Aget, getAccesories };
}
export { usegetAccesoriesUser };
