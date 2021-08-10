import axios from 'axios';

const SERVER_PROTOCOL= 'http';
const SERVER_URL= 'localhost';
const SERVER_PORT = '8000';
const SERVER_API = 'api/v1';

const SERVER = `${SERVER_PROTOCOL}://${SERVER_URL}:${SERVER_PORT}/${SERVER_API}/`;

export const instance = axios.create({
    baseURL: SERVER,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const apiGetData = response => response.data;

export default instance;
