import axios from 'axios';

const requets = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    const response = await requets.get(path, option);
    return response.data
};

export default requets;
