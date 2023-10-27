import axios from 'axios';

// const baseURL = import.meta.env.VITE_BASE_URL_LOCAL;
const baseURL = import.meta.env.VITE_BASE_URL;
const Authorization = import.meta.env.VITE_API_KEY;
const departmentSystemId = import.meta.env.VITE_DEPARTMENT_SYSTEMS;

/*/
 #getUsers
 funcion que realiza una llamada a la api 
 para traer los usuarios en orden ascendente
/*/
export const getUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}users?&order=asc&sort=id`, {
        headers: {
          accept: 'application/json',
          Authorization: Authorization,
        },
      });
      return response.data.rows;
    } catch (error) {
      throw new Error('Error al obtener los usuarios');
    }
  };
/*/
 #getAssetsUser
 funcion que realiza una llamada a la api para
 traer los activos de un usuario, recibe la
 id del usuario y devuelve sus activos
/*/
export const getAssetsUser = async (userId) => {
    try {
        const response = await axios.get(`${baseURL}users/${userId}/assets`, {
            headers: {
                accept: 'application/json',
                Authorization: Authorization,
            }
        });
        return response.data.rows;
    } catch (error) {
        throw new Error('Error al obtener los activos de usuario');
    }
};
/*/
 #getAccesoriesUser
 funcion que realiza una llamada a la api para 
 traer los accesorios de un usuario, recibe la
 id del usuario y devuelve sus activos
/*/
export const getAccesoriesUser = async (userId) => {
   try {
    const response = await axios.get(`${baseURL}users/${userId}/accessories`, {
        headers: {
            accept: 'aplication/json',
            Authorization: Authorization,
        }
    });
    return response.data.rows;
   } catch (error) {
    throw new Error ('Error al obtener los accesorios de usuario');
   }
}
/*/
 #getMaintancesAsset
 funcion que realiza una llamada a la api para 
 traer los mantenimientos de un activo, recibe la
 id del activo y devuelve sus mantenimientos en 
 orden descendente
/*/
export const getMaintancesAsset = async (assetId) => {
    try {
        const response = await axios.get(`${baseURL}maintenances?&asset_id=${assetId}`, {
            headers: {
                accept: 'application/json',
                Authorization: Authorization,
            }
        });
        return response.data.rows;
    } catch (error) {
        throw new Error('Error al obtener los mantenimientos del activo');
    }
};
/*/
 #getMaintancesForDate
 funcion que realiza una llamada a la api para 
 traer los mantenimientos que coincidan los párametros
 pasados de año y mes, de no pasar parametros devolvera
 todos los mantenimientos realizados
/*/
export const getMaintancesForDate = async (year, month) => {
    try {
        const response = await axios.get(`${baseURL}maintenances?search=${year}-${month}&sort=created_at`, {
            headers: {
                accept: 'application/json',
                Authorization: Authorization,
            }
        });
        return response.data.rows;
    } catch (error) {
        throw new Error('Error al obtener la lista de mantenimientos');
    }
};
/*/
 #getComponentsWhitComputerSerial
 funcion que realiza una llamada a la api para 
 traer los componentes de un activo, recibe el 
 numero de serie y devuelve sus componentes
/*/
export const getComponentsWhitComputerSerial = async (serial) => {
    try {
        const res = await axios.get(`${baseURL}components?search=${serial}`, {
            headers: {
                accept: 'application/json',
                Authorization: Authorization,
            }
        });
        return res.data.rows;
    } catch (error) {
        throw new Error('Error al obtener los componentes de los activos');
    }
}
/*/
 #getManagerSystem
 funcion que realiza una llamada a la api para 
 traer los datos de un departamento, en este caso
 el departamento de sistemasm de la solicitud se 
 extrae el manager (lider de sistemas) 
/*/
export const getManagerSystem = async () => {
    try {
        const response = await axios.get(`${baseURL}departments/${departmentSystemId}`, {
            headers:{
                accept: 'application/json',
                Authorization: Authorization,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener Manager Systems');
    }
}
/*/
 #getLicensesUser
 funcion que realiza una llamada a la api para 
 traer las licencias que porta un usuario, recibe
 el id del usuario y devuelve los datos
/*/
export const getLicensesUser = async (idUser) => {
    try {
        const response = await axios.get(`${baseURL}users/${idUser}/licenses`, {
            headers:{
                accept: 'application/json',
                Authorization: Authorization,
            }
        });
        return response.data.rows;
    } catch (error) {
        throw new Error('Error al traer la licencia del usuario')
    }
}
/*/
 #getSearch
 funcion que realiza una llamada a la api para 
 traer coincidencias de la busqueda realizada 
 en el buscador de la pagina de mantenimientos
 
 Recibe la busqueda en string y el limite de 
 reesultados en entero 
/*/
export const getSearch = async (search, limit) => {
    try {
        const response = await axios.get(`${baseURL}hardware?limit=${limit}&search=${search}`,{
            headers:{
                accept:'application/json',
                Authorization: Authorization,
            }
        });
        return response.data.rows;
    } catch (error) {
        throw new Error('Error al intentar realizar la busqueda')

    }
}
/*/
 #SendMaintance
 funcion que hace envio de datos a la api
 recibe los datos de un mantenimiento y la
 key de el usuario, regresa un mensaje que
 contiene un status,status 200 === todo ok
/*/
export const SendMaintance = async (data, key) => {

    try {
        const response = await axios.post(`${baseURL}maintenances`, data, {
            headers: {
                Authorization: `Bearer ${key}`,
                accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        
        return response;
    } catch (error) {
        throw new Error('Error al enviar el mantenimiento: ' + error);
    }
};



