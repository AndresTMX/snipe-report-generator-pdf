import { useEffect, useState } from "react";
import {getUsersSystemsDepartment, getManagerSystem} from '../API/'

function useGetUsersSystems() {

    const [dataUserSystems, setDataUserSystems] = useState();
    const [dataDepartment, setDataDepartment] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //obteniendo info de los usuarios del departamento de sistemas
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const usersSystems = await getUsersSystemsDepartment();
                setDataUserSystems(usersSystems);
                const data = await getManagerSystem();
                setDataDepartment(data)
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();        

    }, [loading]);

    return{dataDepartment, dataUserSystems, loading}
   
}

export {useGetUsersSystems};