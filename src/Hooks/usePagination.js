import { useState } from "react";
//helpers
import filterSearch from '../Helpers/filterSearch';
import {filterUsersActives, filterUsersCompany, filterUsersLocation, filterUsersDepartment} from "../Helpers/filterUsers";
//notification modal
import {actionTypes as actionTypesModals, StatesModals} from '../Context/StatesModalsReducer';
//Symbols

//este Hook recibe un array de usuarios y los pagina, 
//devulve la pagina en la que estas
function usePagination(users, search, dispatch) {

    const [filter, setFilter] = useState({
        actives:true,
        company:false,
        location:false,
        department:false,
    });

    const [page, setPage] = useState({init: 0,end: 6})
    let pageRender
    let searchResults

    if(!search){
        pageRender = users ? users.slice(page.init, page.end) : [];
        searchResults = users? users.length: 0;
    }
    
    if(search){
        pageRender = users? filterSearch(search, users): false;
        searchResults = pageRender? pageRender.length:0;
    }

    if(!filter.actives){
        pageRender = users? users.slice(page.init, page.end): false;
        searchResults = pageRender? pageRender.length:0;
    }

    if(filter.actives){
        pageRender = users? filterUsersActives(users).slice(page.init, page.end): false;
        searchResults = pageRender? pageRender.length:0;
    }
    
    if(filter.actives && filter.company){
        const usersActives = users? filterUsersActives(users): false;
        pageRender = usersActives? filterUsersCompany(usersActives, filter.company): false;
        searchResults = pageRender? pageRender.length:0;
    }

    if(filter.actives && filter.location){
        const usersActives = users? filterUsersActives(users): false;
        pageRender = usersActives? filterUsersLocation(usersActives, filter.location): false;
        searchResults = pageRender? pageRender.length:0;
    }

    if(filter.actives && filter.company && filter.location){
        const userActives = users? filterUsersActives(users): false;
        const usersCompnay = userActives? filterUsersCompany(userActives, filter.company): false;
        pageRender = usersCompnay? filterUsersLocation(usersCompnay, filter.location): false;
        searchResults = pageRender? pageRender.length:0;
    }

    if(filter.actives && filter.department){
        const usersActives = users? filterUsersActives(users): false;
        pageRender = usersActives? filterUsersDepartment(usersActives, filter.department): false;
        searchResults = pageRender? pageRender.length:0;
    }

    if(filter.actives && filter.company && filter.location & filter.department){
        const userActives = users? filterUsersActives(users): false;
        const usersCompnay = userActives? filterUsersCompany(userActives, filter.company): false;
        const usersLocation = usersCompnay? filterUsersLocation(company, filter.location): false;
        pageRender = usersLocation? filterUsersDepartment(usersLocation, filter.department): false;
        searchResults = pageRender? pageRender.length:0;
    }

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

    const setActives = () =>{
        setFilter({
            ...filter,
            actives: !filter.actives
        })
    }

    const setCompany = (company) => {
        setFilter({
            ...filter,
            company: company
        })
    }

    const setLocation = (location) => {
        setFilter({
            ...filter,
            location:location
        })
    }

    const setDepartment = (department) => {
        setFilter({
            ...filter,
            department:department
        })
    }
    
    const clearFilters = () => {
        setFilter({
        actives:true,
        company:false,
        location:false,
        department:false,
        })
    }

    const statesFilters = {pageRender, searchResults, filter}
    const actionsFiters = {nextPage, prevPage, setActives, setCompany, setLocation, setDepartment, clearFilters}

    return {statesFilters, actionsFiters};
}

export {usePagination};
