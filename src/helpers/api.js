import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 5000,
    headers: {'X-Custom-Header': 'footbar'}
});

export default api;