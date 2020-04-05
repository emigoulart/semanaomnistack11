import axios from 'axios';
const api = axios.create({
    baseURL: 'http://192.168.0.15:3333' // url from you local env ip, if you are testing local, the same used in expo app, with port 3333.
});

export default api;