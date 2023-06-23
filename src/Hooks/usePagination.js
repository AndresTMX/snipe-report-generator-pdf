import { useState } from "react";
//helpers
import filterSearch from '../Helpers/filterSearch';
//notification modal
import {actionTypes as actionTypesModals, StatesModals} from '../Context/StatesModalsReducer';
//context 

//este Hook recibe un array de usuarios y los pagina, 
//devulve la pagina en la que estas
function usePagination(users, search, dispatch) {

    const [page, setPage] = useState({init: 0,end: 6})
    let pageRender
    let searchResults

    if(!search){

        pageRender = users ? users.slice(page.init, page.end) : [];
        searchResults = users? users.length: 0;

    }else{

        pageRender = users? filterSearch(search, users): false;
        searchResults = pageRender? pageRender.length:0;

    }

    const nextPage = () => {

        const newInit = page.end;
        const newEnd = page.end + 4;
        setPage({
            ...page,
            init: newInit,
            end: newEnd
        });

    }

    const prevPage = () => {
        if (page.init < 1) {
            dispatch({type: actionTypesModals.setModalNotification, payload: "¡ya estas en la primera pagina!"})
            setPage({
                ...page,
                init: 0,
                end: 4
            })
        } else {
            const newInit = page.end - 8;
            const newEnd = page.end - 4;
            setPage({
                ...page,
                init: newInit,
                end: newEnd
            });

        }

    }

    return {pageRender, searchResults, nextPage, prevPage};
}

export {usePagination};
