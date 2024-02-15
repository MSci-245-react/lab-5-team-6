import axios from 'axios';
const client = axios.create({
    baseURL: 'https://api.outsidein.dev/tIPk37H5cTrXKGetT8SJL7O6YNdPR0DZ',
    });
    
const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};
export default api;
