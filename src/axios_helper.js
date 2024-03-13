import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};

export const setAuthToken = (token) => {
    if (token !== null) {
        window.localStorage.setItem("auth_token", token);
    } else {
        window.localStorage.removeItem("auth_token");
    }
};

export const request = (method, url, data) => {

    let headers = {};

    if (getAuthToken() !== null && getAuthToken() !== "null" && "/api/v1/register" !== url && "/api/v1/login" !== url) {
        headers = {'Authorization': `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data})
};

export const tokenErrorHandler = (e) => {
    if (e.response && e.response.status === 401) {
        setAuthToken(null);
        window.location.replace("/login");
    }
}