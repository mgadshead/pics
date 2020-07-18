import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID O-0PjV00M7ZLSgAOvAaWhng2wA5mNyoiGPP7f00TFfc'
    }
});
