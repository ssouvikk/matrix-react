export const AuthActionTypes = {
    Login: '[Login] Action',
    Logout: '[Logout] Action',
    CheckAuth: '[CheckAuth] Action',
    LoadUser: '[Update Profile] Action',
}

export const Login = (payload) => {
    return {
        type: AuthActionTypes.Login,
        payload
    }
}

export const Logout = () => {
    return {
        type: AuthActionTypes.Logout,
    }
}

export const LoadUser = (payload) => {
    return {
        type: AuthActionTypes.LoadUser,
        payload
    }
}


export const CheckAuth = () => {
    return {
        type: AuthActionTypes.CheckAuth
    }
}
