import axios from 'axios';
import HeaderToken from '../helpers/header';
let AUTH_URL = "http://localhost:3000/api/chat/auth";
let REGISTER_URL = "http://localhost:3000/api/chat/userRegister";
let LOGGED_URL = "http://localhost:3000/api/chat/me";

// console.log(root);
let config = {
    headers: {
        "Content-Type": "application/json"
    }
};
export const Auth = (data) => {
    return axios.post(AUTH_URL, JSON.stringify(data), config);
};
export const Register = (data) => {
    return axios.post(REGISTER_URL, JSON.stringify(data), config);
};
export const Logout = () => {
    localStorage.removeItem("currentuser");    
};

export const LoggedInUer = () => {
    console.log(HeaderToken());
    return axios.get(LOGGED_URL, { headers: HeaderToken(), "Content-Type": "application/json" });
};



