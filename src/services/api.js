import axios from 'axios';


/*
json-server --watch -d 180 --host 192.168.0.108 db.json
*/


const api = axios.create({
    baseURL: 'http://192.168.3.102:3000'
})

export default api;