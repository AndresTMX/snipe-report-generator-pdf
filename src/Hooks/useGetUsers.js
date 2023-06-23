import {  getUsers } from "../API/index";
import { useState, useEffect } from "react";

function useGetUsers() {

    const [dataUsers, setDataUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

       try {
        setTimeout(()=> {
            //obteniendo info del usuario
        const fetchInfoUser = async () => {
            const result = await getUsers();
            setDataUser(result);
            setLoading(false);
        }
        fetchInfoUser();

        },1000 )
       } catch (error) {
        setError(error);
       }
        

    }, [loading]);

    return { dataUsers, loading, error};
}
export {useGetUsers};