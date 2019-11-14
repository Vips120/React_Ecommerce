import { USER_LOGIN, USER_REGISTER, LOADING,LOGGEDINUSER,ERROR, LOGOUT} from './user.type';
import { Auth, Register, LoggedInUer,Logout } from '../../API/user';
import { history } from '../../helpers/history';
export const Loader = () => {
    return { type: LOADING };     
};

export const Userlogin = (item) => {
    return async (dispatch) => {
    try {
            dispatch(Loader);
        let auth = await Auth(item);
        localStorage.setItem("currentuser", JSON.stringify(auth.data));
            dispatch({ type: USER_LOGIN, payload: auth.data });
        history.push("/shop");
        }
    catch (error) {
            dispatch({ type: ERROR, payload: error.response.data});
         }
   }
};

export const Userlogout = () => {
    Logout();
    return { type: LOGOUT };
};

export const Userregister = (item) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        let register = await Register(item);
        dispatch({ type: USER_REGISTER, payload: register.data});
      }
};

export const LoggedInUser = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        let userData = await LoggedInUer();
        console.log('ddddfdfdf',userData);
        dispatch({ type: LOGGEDINUSER, payload: userData.data });
    };
};


