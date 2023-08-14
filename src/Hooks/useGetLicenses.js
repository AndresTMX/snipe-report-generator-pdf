import { useEffect, useState } from "react";
import { getLicensesUser } from "../API";

function useGetLicenses(idUser) {
    const [user, getUser] = useState(idUser);
    const [dataLicenses, setDataLicenses] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        //Este hook trae los datos de la o las licencias que tiene
        // asignadas el usuario, recibe su id y retorna los datos
        if(user){
            setTimeout(()=> {
                const fetchLicenses = async() => {
                    const result = await getLicensesUser(idUser);
                    setDataLicenses(result);
                    setLoading(false);
                };
                fetchLicenses();
            },1500)    
        }
    }, [idUser])

    return{dataLicenses, loading, setLoading}
}

export {useGetLicenses};