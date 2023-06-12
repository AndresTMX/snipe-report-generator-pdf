
//esta funcion filtra los usuarios para devolver solamente los que tienen más de 0 activos
export default function filterUsersActives(arrayUsers){
    const usersFiltered = arrayUsers.filter(user => user.assets_count != 0);
    return usersFiltered;
}