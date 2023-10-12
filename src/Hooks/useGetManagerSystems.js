import { useEffect, useState } from "react";
import { getManagerSystem} from '../API'

function useGetManagerSystems() {

    const [dataDepartment, setDataDepartment] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //obteniendo info de los usuarios del departamento de sistemas
        const fetchData = async () => {
            try {
                const data = await getManagerSystem();
                setDataDepartment(data);
                localStorage.setItem("managerSystems", data.manager.name);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();        

    }, [loading]);

    return{dataDepartment, loading}
   
}

export {useGetManagerSystems};