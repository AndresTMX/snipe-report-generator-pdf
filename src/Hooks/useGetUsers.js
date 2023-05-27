import {  getUsers } from "../API/index"
import { useState, useEffect } from "react"

function useGetUsers() {

    const [dataUsers, setDataUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(()=> {
            //obteniendo info del usuario
        const fetchInfoUser = async () => {
            const result = await getUsers();
            setDataUser(result);
            setLoading(false);
        }
        fetchInfoUser();

        },2000 )
        

    }, [loading]);

    return { dataUsers, loading};
}
export {useGetUsers};