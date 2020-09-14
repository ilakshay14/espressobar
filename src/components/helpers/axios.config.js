import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/';

export const HTTP_POST = (endpoint, data) => {
    return axios.post(BASE_URL + endpoint, data)
        .then(response => { 
            console.log(response);
            return response})
        .catch(error => { return error})
}

export const HTTP_GET = (endpoint) => {
    return axios.get(BASE_URL + endpoint)
        .then(response => { return response})
        .catch(error => { return error})
}