import { USER_LOGIN, USER_REGISTER,ERROR, LOGOUT,LOGGEDINUSER} from '../../action/user/user.type';
let user = JSON.parse(localStorage.getItem("currentuser"));
const initialstate = user ? { loggedIn: true, user } : {};
export const UserLogin = (state = initialstate, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { loggedIn:true, loggedUser: action.payload };
        case ERROR:
            return { loggedIn: false, logginerror: action.payload };
        case LOGGEDINUSER:
            return { currentUserData: action.payload };
        case LOGOUT:
            return {}

        default:
            return state;
    }
};
export const UserRegister = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return { ...state,registerUser: action.payload};
            default:
                    return state;
    }
}
