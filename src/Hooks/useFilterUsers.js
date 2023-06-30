import { useState } from "react";

function useFilterUsers() {

    const [filter, setFilter] = useState({
        actives:true,
        company:false,
        location:false,
        department:false,
    });

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

    const filterActions = {setActives, setCompany, setLocation, setDepartment, clearFilters}

    return{filterActions, filter}
}

export {useFilterUsers};