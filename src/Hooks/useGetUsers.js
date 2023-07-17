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

            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchInfoUser();
    }, []);

    return { dataUsers, loading, error };
}
export { useGetUsers };