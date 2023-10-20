import axios from 'axios'

const axiosapi = axios.create({
    baseURL: process.env.MIX_VUE_APP_API_URL
});

export default axiosapi;
