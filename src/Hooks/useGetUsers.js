import { getUsers } from "../API/index";
import { useState, useEffect } from "react";

function useGetUsers() {

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
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

    // Intentar recuperar los datos del almacenamiento local del navegador
    const cachedData = localStorage.getItem("dataUsers");
    if (cachedData) {
      setDataUser(JSON.parse(cachedData));
      setLoading(false);
    } else {
        fetchInfoUser();
    }

    }, []);

    return { dataUsers, loading, error };
}
export { useGetUsers };