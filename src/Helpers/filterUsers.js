
//esta funcion filtra los usuarios para devolver solamente los que tienen más de 0 activos
export function filterUsersActives(arrayUsers){
    const usersFiltered = arrayUsers.filter(user => user.assets_count != 0);
    return usersFiltered;
}

export function filterUsersCompany(arrayUsers, company){
    const usersFiltered = arrayUsers.filter(user => user.company?.name === company);
    return usersFiltered;
}

export function filterUsersLocation(arrayUsers, location){
    const usersFiltered = arrayUsers.filter(user => user.location?.name === location);
    return usersFiltered;
}

export function filterUsersDepartment(arrayUsers, department){
    const usersFiltered = arrayUsers.filter(user => user.department?.name === department);
    return usersFiltered;
}