import axios from 'axios';
let ENDPOINT_URL = 'http://localhost:3000/api/chat/allUserData';
const getShopData = () => {
    return axios.get(ENDPOINT_URL);
};

export default getShopData;