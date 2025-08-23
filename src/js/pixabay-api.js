
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'mij_kl';

export const getImagesByQuery = (query) => 
axios.get(BASE_URL, {
    params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,


    },
})
.then(response => response.data);