import axios from 'axios';
let ENDPOINT_URL = 'http://localhost:3000/api/chat/allUserData';
let USER_DATA = "http://localhost:3000/api/chat/allUserData/"
let config = {
    headers: {
        "Content-Type":"application/json"
    }
}
const getShopData = () => {
    return axios.get(ENDPOINT_URL, config);
};
export const UserDataById = (id) => {
    return axios.get(USER_DATA + id, config);
};

export default getShopData;