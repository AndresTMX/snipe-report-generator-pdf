import { getUsers } from "../API/index";
import { useState, useEffect } from "react";
import { useRefreshCache } from "./useRefreshCache";

function useGetUsers() {

    const {cache, setCache} = useRefreshCache()
    const [dataUsers, setDataUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
 
    useEffect(() => {
        //obteniendo info del usuario
        const fetchInfoUser = async () => {
            try {
                const result = await getUsers();
                setDataUser(result);
                setLoading(false);
                localStorage.setItem("dataUsers", JSON.stringify(result));
                setCache(true);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

    // Intenta recuperar los datos del almacenamiento local del navegador
    const cachedData = localStorage.getItem("dataUsers");

    if (cachedData) {
      setDataUser(JSON.parse(cachedData));
      setLoading(false);
    } else {
        fetchInfoUser();
    }

    if(!dataUsers && !cache){
        fetchInfoUser();   
    }

    }, [dataUsers, cache]);

    return { dataUsers, loading, error };
}
export { useGetUsers };