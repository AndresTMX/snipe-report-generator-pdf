import axios from 'axios';

// const baseURL = import.meta.env.VITE_BASE_URL;
// const Authorization = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL_LOCAL;
const Authorization = import.meta.env.VITE_API_KEY_DEVELOPMENT;
const departmentSystemId = import.meta.env.VITE_DEPARTMENT_SYSTEMS;


export const getItem = () => {
    return axios.get(`${baseURL}hardware/1`, {
        headers: {
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
        .then(res => res.data)
        .catch((error) => console.log(error));
};

export const getUsers = () => {
    return axios.get(`${baseURL}users?&order=asc&sort=id`, {
        headers: {
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data.rows)
    .catch((error) => console.log(error));
};

export const getUserId = (id) => {
    return axios.get(`${baseURL}users/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data)
    .catch((error) => console.log(error));
};

export const getAssetsUser = (userId) => {
    return axios.get(`${baseURL}users/${userId}/assets`, {
        headers: {
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data.rows)
    .catch((error) => console.log(error));
};

export const getAccesoriesUser = (userId) => {
    return axios.get(`${baseURL}users/${userId}/accessories`, {
        headers: {
            accept: 'aplication/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data.rows)
    .catch((error) => console.log(error));
}

export const getMaintancesAsset = (assetId) => {
    return axios.get(`${baseURL}maintenances?&asset_id=${assetId}`, {
        headers: {
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data.rows)
    .catch((error) => console.log(error));
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
        return console.log(error);
    }
}

export const getUsersSystemsDepartment = () => {
    return axios.get(`${baseURL}users?department_id=${departmentSystemId}`, {
        headers:{
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data.rows)
    .catch((error) => console.log(error));
}

export const getManagerSystem = () => {
    return axios.get(`${baseURL}departments/${departmentSystemId}`, {
        headers:{
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data)
    .catch((error) => console.log(error));
}

export const getLicensesUser = (idUser) => {
    return axios.get(`${baseURL}users/${idUser}/licenses`, {
        headers:{
            accept: 'application/json',
            Authorization: Authorization,
        }
    })
    .then(res => res.data.rows)
    .catch((error) => console.log(error));
}



