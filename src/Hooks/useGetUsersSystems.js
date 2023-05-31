import { useEffect, useState } from "react";
import {getUsersSystemsDepartment, getManagerSystem} from '../API/'

function useGetUsersSystems() {

    const [dataUserSystems, setDataUserSystems] = useState();
    const [dataDepartment, setDataDepartment] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //obteniendo info de los usuarios del departamento de sistemas
        const fetchData = async () => {
            const usersSystems = await getUsersSystemsDepartment();
            setDataUserSystems(usersSystems);

            const data = await getManagerSystem();
            setDataDepartment(data)
            setLoading(false);
        }
        fetchData();        

    }, [loading]);

    return{dataDepartment, dataUserSystems, loading}
   
}

export {useGetUsersSystems};