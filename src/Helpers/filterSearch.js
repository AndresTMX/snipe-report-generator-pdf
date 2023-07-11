
//filtro de busqueda, recibe la busqueda y el array en el que
//quieres buscar y devuelve las coincidencias en los campos
// name, company, notes, location, 

export function filterSearch(busqueda, array) {
  
    return array.filter(user => {
      const name = user.name.toLowerCase();
      const company = user.company?.name.toLowerCase();
      const notes = user.notes.toLowerCase();
      const location = user.location?.name.toLowerCase();
      const department = user.department?.name.toLowerCase();      
      const busquedaMinuscula = busqueda.toLowerCase();

      if(!busqueda.length){
        return array
      }
      
      return name.includes(busquedaMinuscula) || company?.includes(busquedaMinuscula) || notes.includes(busquedaMinuscula) || location?.includes(busquedaMinuscula) || department?.includes(busquedaMinuscula);
    });
  }

  export function multiFilter({filter}, dataRender) {

    return dataRender.filter(user => {
      const actives = user.assets > 0;
      const company = user.company.name === filter.company;
      const location = user.location.name === filter.location;
      const department = user.department?.name === filter.department;
      
      return actives || company || location|| department;
    });

  }