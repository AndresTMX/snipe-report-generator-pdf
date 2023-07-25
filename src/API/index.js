import axios from 'axios';

// const baseURL = import.meta.env.VITE_BASE_URL;
// const Authorization = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL_LOCAL;
const Authorization = import.meta.env.VITE_API_KEY_DEVELOPMENT;
const departmentSystemId = import.meta.env.VITE_DEPARTMENT_SYSTEMS;

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

export const getUserId = async (id) => {
    try {
        const response = await axios.get(`${baseURL}users/${id}`, {
            headers: {
                accept: 'application/json',
                Authorization: Authorization,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el usuario')
    }
};

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

export const getAllMaintances = async (offset,limit) => {
    try {
        const response = await axios.get(`${baseURL}maintenances?limit=${limit}&offset=${offset}&sort=created_at`, {
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

export const getUsersSystemsDepartment = async () => {
    try {
        const response = await axios.get(`${baseURL}users?department_id=${departmentSystemId}`, {
            headers:{
                accept: 'application/json',
                Authorization: Authorization,
            }
        });
        return response.data.rows;
    } catch (error) {
        throw new Error('Error al obtener los usuarios del departamento de sistemas')
    }
}

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

export const SendMaintance = async(maintance) => {
    try {
        const response = await axios.post(`${baseURL}maintenances`,{
            headers:{
            accept:'application/json',
            Authorization:Authorization,
            },
            body: JSON.stringify(maintance),
        });
        return response
    } catch (error) {
        throw new Error('Error al enviar el mantenimiento con id:' + maintance.asset_id)
    }   
}



