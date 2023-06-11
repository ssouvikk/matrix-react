import { AuthActionTypes } from "../Actions";
import { initialState } from '../Storage';

const Auth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthActionTypes.Login:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isExpired: false
            }

        case AuthActionTypes.Logout:
            return {
                ...state,
                ...initialState
            };
            
        case AuthActionTypes.LoadUser: {
            return {
                ...state,
                user: payload
            }
        }

        case AuthActionTypes.CheckAuth:
            return { ...state }


        default:
            return state;
    }
}

export default Auth;