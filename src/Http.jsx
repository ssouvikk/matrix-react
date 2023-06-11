import axios from 'axios';
import Configs from './Configs';
import { ToastService } from './Helpers/Alert';
import Store from './Redux';
import { Logout } from './Redux/Actions';

axios.defaults.baseURL = Configs.API_URL;

axios.interceptors.response.use(
    resp => {
        if ([200, 201].includes(resp.data.status) && resp.data.message) {
            ToastService.success(resp.data.message);
        }
        return resp;
    },
    error => {
        if (error && error.response) {
            const { data } = error.response;
            if ([400, 401, 404, 500].includes(data.status) && data.message) {
                ToastService.error(data.message);
                if (data.status === 401) Store.dispatch(Logout());
            }
            return Promise.reject(data);
        }
    }
);
export const Http = axios;
export const FixedHttp = axios.create();