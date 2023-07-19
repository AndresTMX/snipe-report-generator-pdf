import { useState } from "react";
import { actionTypes as actionTyesModals } from "../Context/StatesModalsReducer";

function useRefreshCache(dispatch) {
    const [cache, setCache] = useState(false);

    function clearCacheUser () {
        setCache(!cache)
        localStorage.removeItem("dataUsers");
        dispatch({type:actionTyesModals.setModalNotification, payload:'Usuarios actualizados'});
    }


    return {cache, setCache, clearCacheUser}
}

export {useRefreshCache};