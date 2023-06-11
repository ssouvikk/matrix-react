import { Http } from '../../Http';
import { AuthActionTypes } from "../Actions";
import { initialState } from '../Storage';

const Auth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthActionTypes.Login:
            Http.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`;
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
            if (state.isAuthenticated) {
                Http.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
            }
            return { ...state }


        default:
            return state;
    }
}

export default Auth;