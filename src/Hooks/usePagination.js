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
function usePagination(loading, users, search, dispatch) {

    const [pageRender, setPageRender] = useState([]);
    const [searchResults, setSearchResults] = useState(0);
    const {filterActions, filter} = useFilterUsers();
    const [page, setPage] = useState({init: 0,end: 6});
    const {actives, company, location, department} = filter;
    
    useEffect(() => {
        let newPageRender;
        let newSearchResults;
      
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

   
    const nextPage = () => {

        const newInit = page.end;
        const newEnd = page.end + 6;
    
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
                end: 6
            })
        } else {
            const newInit = page.end - 12;
            const newEnd = page.end - 6;
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

// CODIGO COMENTADO {
//     useEffect(()=> {

//         let newPageRender;
//         let newSearchResults;
    
    
//     //si todos los filtros estan desactivados
//         if(!search && !actives && !company && !department && !location){
//             newPageRender = users ? users.slice(page.init, page.end) : [];
//             newSearchResults = users? users.length: 0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('1')
//         }
//     //si acitvos esta off y hay busqueda
//         if(search && !actives && !company && !department && !location){
//             newPageRender= users? filterSearch(search, users): [];
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('2')
//         }
//     //si activos esta on y hay busqueda
//         if(actives && search && !company && !department && !location){
//             const userActives = users? filterUsersActives(users): [];
//             newPageRender = userActives? filterSearch(search, userActives):[];
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('3')
//         }
    
//     //si acitovos esta on y NO hay busqueda
//         if(actives && !search && !company && !department && !location){
//             newPageRender = users? filterUsersActives(users).slice(page.init, page.end): [];
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('4')
//         }
    
//     //si activos esta en on, company en on y search on
//         if(actives && search && company && !department && !location){
//             const usersActives = users? filterUsersActives(users): [];
//             const dataSearch = usersActives? filterUsersCompany(usersActives, company): [];
//             newPageRender = dataSearch? filterSearch(search, dataSearch):[]
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('5');
//         }
    
//     //si activos esta en on, company en on y search of
//         if(actives && company && !search && !location && !department){
//             const usersActives = users? filterUsersActives(users): [];
//             newPageRender = usersActives? filterUsersCompany(usersActives, company): []; 
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('6');
//         }
    
//     //si activos esta on, company esta on y search esta en on    
//         if(actives && company && location && search && !department){
//             const usersActives = users? filterUsersActives(users): [];
//             const usersCompany = usersActives? filterUsersCompany(usersActives, company):[];
//             const usersLocation = usersCompany? filterUsersLocation(usersCompany, location): [];
//             newPageRender = usersLocation? filterSearch(search, usersLocation):[];
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('7')
//         }
    
//     //si activos esta on, company esta on, location on y search esta en off    
//         if(actives && company && location && !search && !department){
//             const usersActives = users? filterUsersActives(users): [];
//             const usersCompany = usersActives? filterUsersCompany(usersActives, company):[];
//             newPageRender = usersCompany? filterUsersLocation(usersCompany, location): [];
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('8')
//         }
    
//     //si activos esta en on, company on, location on, department on, search en off
//         if(actives && company && location && department && !search){
//             const userActives = users? filterUsersActives(users): [];
//             const usersCompnay = userActives? filterUsersCompany(userActives, company): [];
//             const usersLocation = usersCompnay? filterUsersLocation(usersCompnay, location): [];
//             newPageRender = usersLocation? filterUsersDepartment(usersLocation, department):[];
//             newSearchResults = pageRender? pageRender.length:0;
//             setPageRender(newPageRender);
//             setSearchResults(newSearchResults);
//             // console.log('9')
//         }
    
//     //si activos esta en on, company on, location on, department on, search en on
//     if(actives && company && location && department && search){
//         const userActives = users? filterUsersActives(users): [];
//         const usersCompnay = userActives? filterUsersCompany(userActives, company): [];
//         const usersLocation = usersCompnay? filterUsersLocation(usersCompnay, location): [];
//         const userDepartment = usersLocation? filterUsersDepartment(usersLocation, department):[];
//         newPageRender = userDepartment? filterSearch(search, userDepartment): [];
//         newSearchResults = pageRender? pageRender.length:0;
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('10')
//     }
    
//     //si actives on, empresa on, department on y search off
//     if(actives && company && !location && department && !search){
//         const userActives = users? filterUsersActives(users): [];
//         const usersCompnay = userActives? filterUsersCompany(userActives, company): [];
//         newPageRender = usersCompnay? filterUsersDepartment(usersCompnay, department):[];
//         newSearchResults = pageRender? pageRender.length:0;
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('11')
//     }
    
//     //si actives on, empresa on, department on y search on
//     if(actives && company && !location && department && search){
//         const usersActives = users? filterUsersActives(users): [];
//         const usersCompnay = usersActives? filterUsersCompany(usersActives, company): [];
//         const usersDepartment = usersCompnay? filterUsersDepartment(usersCompnay, department):[];
//         newPageRender = usersDepartment? filterSearch(search, usersDepartment):[];
//         newSearchResults = pageRender? pageRender.length:0;
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('12')
//     }
    
//     //si solo location, actives on y search of
//     if(actives && !company && location && !department && !search){
//         const usersActives = users? filterUsersActives(users): [];
//         newPageRender = usersActives? filterUsersLocation(usersActives, location): [];
//         newSearchResults = pageRender? pageRender.length:0;
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('13')
//     }
    
//     //si solo location, actives on y search of
//     if(actives && !company && location && !department && search){
//         const usersActives = users? filterUsersActives(users): [];
//         const usersLocation = usersActives? filterUsersLocation(usersActives, location): [];
//         newPageRender = usersLocation? filterSearch(search, usersLocation): [];
//         newSearchResults = pageRender? pageRender.length:0;
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('14')
//     }
    
//     //si solo department, actives on y search of
//     if(actives && !company && !location && department && !search){
//         const usersActives = users? filterUsersActives(users): [];
//         newPageRender = usersActives? filterUsersDepartment(usersActives, department): [];
//         newSearchResults = pageRender? pageRender.length:0;
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('15')
//     }
    
//     //si department y location on y search of
//     if(actives && !company && location && department && !search){
//         const usersActives = users? filterUsersActives(users): [];
//         const usersLocation = usersActives? filterUsersLocation(usersActives, location): [];
//         newPageRender = usersLocation? filterUsersDepartment(usersLocation,department ) : [];
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('16')
//     }
    
//     //si department y location on y search of
//     if(actives && !company && location && department && search){
//         const usersActives = users? filterUsersActives(users): [];
//         const usersLocation = usersActives? filterUsersLocation(usersActives, location): [];
//         const usersDepartment = usersLocation? filterUsersDepartment(usersLocation,department ) : [];
//         newPageRender = usersDepartment? filterSearch(search, usersDepartment): [];
//         setPageRender(newPageRender);
//         setSearchResults(newSearchResults);
//         // console.log('17')
//     }
    
    
    
//        }, [search, actives, company, location, department, users, page])
    
// }