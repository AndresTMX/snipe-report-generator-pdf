import { useEffect, useState } from "react";
//helpers
import {filterSearch} from '../Helpers/filterSearch';
import {filterUsersActives, filterUsersCompany, filterUsersLocation, filterUsersDepartment} from "../Helpers/filterUsers";
//notification modal
import {actionTypes as actionTypesModals} from '../Context/StatesModalsReducer';
//hooks
import {useFilterUsers} from '../Hooks/useFilterUsers';  
//este Hook recibe un array de usuarios y los pagina, 

//devulve la pagina en la que estas
function usePagination( users, search, dispatch) {
    //cambia el numero de usuarios mostrados en una pagina
    const numCards = 8;
    //Estado donde se almacenan los resultados filtrados
    const [pageRender, setPageRender] = useState([]);
    //Estado donde se almacena el numero de resultados que coincide con la busqueda
    const [searchResults, setSearchResults] = useState(0);
    //Funciones de filtros
    const {filterActions, filter} = useFilterUsers();
    //Estado que controla la paginacion
    const [page, setPage] = useState({init: 0,end: numCards});
    //Estados que controlan que filtro esta activo o desactivado a partir de true o false
    const {actives, company, location, department} = filter;

     //funcion que aplica los filtros uno sobre de otro dependiendo de cual se active
     const applyFilters = (data) => {
      if (search) {
        data = filterSearch(search, data);
      }
      if (actives) {
        data = filterUsersActives(data);
      }
      if (company) {
        data = filterUsersCompany(data, company);
      }
      if (location) {
        data = filterUsersLocation(data, location);
      }
      if (department) {
        data = filterUsersDepartment(data, department);
      }

      return data;
    };
    
    useEffect(() => {

        let newPageRender;
        let newSearchResults;
      
       //
        if (!search && !actives && !company && !department && !location) {
          newPageRender = users ? users.slice(page.init, page.end) : [];
          newSearchResults = users ? users.length : 0;
        } else {
          const filteredData = applyFilters(users? users: []);
          newPageRender = filteredData ? filteredData.slice(page.init, page.end) : [];
          newSearchResults = filteredData ? filteredData.length : 0;
        }
      
        setPageRender(newPageRender);
        setSearchResults(newSearchResults);
    }, [ search, actives, company, location, department, users, page]);

    const lastPage = users? filterUsersActives(users).length : 0;
   
    //funcion de pagina siguiente
    const nextPage = () => {

        const newInit = page.end;
        const newEnd = page.end + numCards;

        if(newEnd > lastPage + numCards){
          dispatch({type: actionTypesModals.setModalNotification, payload: "¡ya estas en la ultima pagina!"})
        }

        if(newEnd < lastPage + numCards ){
          setPage({
            ...page,
            init: newInit,
            end: newEnd
        });
        }

    }
    //funcion de pagina anterior
    const prevPage = () => {
        if (page.init < 1) {
            dispatch({type: actionTypesModals.setModalNotification, payload: "¡ya estas en la primera pagina!"})
            setPage({
                ...page,
                init: 0,
                end: numCards
            })
        } else {
            const newInit = page.end - numCards*2;
            const newEnd = page.end - numCards;
            setPage({
                ...page,
                init: newInit,
                end: newEnd
            });

        }

    }

    const actionsPages = {nextPage, prevPage}

    return {searchResults, pageRender, actionsPages, filterActions, filter}
}

export {usePagination};