import BaseService from './BaseService';
import { Http } from '../Http';
import { Login, Logout, LoadUser } from '../Redux/Actions';

export default class AuthService extends BaseService {
    static login(params) {
        return (dispatch) =>
            new Promise((resolve, reject) => {
                Http.post('/auth/login', params)
                    .then((res) => {
                        if (res?.data.status === 200) {
                            dispatch(Login(res?.data.data));
                            return resolve(res?.data);
                        }
                    })
                    .catch((err) => reject(err))
            });
    }

    static verifyEmail(token) {
        return new Promise((resolve, reject) => {
            Http.get(`/auth/verify-email/${token}`)
                .then((res) => resolve(res?.data))
                .catch((err) => reject(err))
        });
    }

    static updateProfile(params) {
        return (dispatch) =>
            new Promise((resolve, reject) => {
                Http.put('/auth/update-profile', params)
                    .then((res) => {
                        if (res?.data.status === 200) {
                            dispatch(LoadUser(res?.data.data));
                            return resolve(res?.data);
                        }
                    })
                    .catch((err) => reject(err))
            });
    }

    static uploadImage(params) {
        return (dispatch) =>
            new Promise((resolve, reject) => {
                Http.post('/auth/profile-image', params)
                    .then((res) => {
                        if (res?.data.status === 201) {
                            dispatch(LoadUser(res?.data.data));
                            return resolve(res?.data);
                        }
                    })
                    .catch((err) => reject(err))
            });
    }

    static setPassword(params) {
        return new Promise((resolve, reject) => {
            Http.post('/auth/set-password', params)
                .then((res) => resolve(res?.data))
                .catch((err) => reject(err));
        });
    }

    static requestPassword(params) {
        return new Promise((resolve, reject) => {
            Http.post('/auth/forgot-password', params)
                .then((res) => {
                    let data = new Response < null > (res?.data);
                    return resolve(data);
                })
                .catch((err) => reject(err))
        });
    }

    static register(params) {
        return new Promise((resolve, reject) => {
            Http.post('/auth/register', params)
                .then((res) => {
                    return resolve(res?.data);
                })
                .catch((err) => reject(err))
        });
    }

    static getMe() {
        return (dispatch) =>
            new Promise((resolve, reject) => {
                Http.get('/auth/me')
                    .then((res) => {
                        dispatch(LoadUser(res?.data.data));
                        return resolve(res?.data);
                    })
                    .catch((err) => reject(err))
            });
    }


    static logout() {
        return (dispatch) =>
            new Promise((resolve, reject) => {
                Http.post('/auth/logout')
                    .then((res) => {
                        dispatch(Logout());
                        return resolve(res?.data);
                    })
                    .catch((err) => reject(err))
            });
    }

    static updatePassword(params) {
        return new Promise((resolve, reject) => {
            Http.put('/auth/update-password', params)
                .then((res) => resolve(res?.data))
                .catch((err) => reject(err))
        });
    }

    static resetPassword(params) {
        return new Promise((resolve, reject) => {
            Http.post('/auth/reset-password', params)
                .then((res) => resolve(res?.data))
                .catch((err) => reject(err));
        });
    }
}
