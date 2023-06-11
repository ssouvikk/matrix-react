import { Http, } from '../Http';

export default class BaseService {
    Http = Http;
    httpRequest;
    constructor() {
        this.httpRequest = (params) => {
            const $d = new Promise((resolve, reject) => {
                Http(params)
                    .then(res => {
                        return resolve(res.data);
                    })
                    .catch(err => {
                        console.error(err);
                        return reject(err);
                    });
            });
            return $d;
        };
    }

    /*
    GET request
    */
    getAjax = (url, params = {}) => {
        return this.httpRequest({
            method: 'GET',
            url: url,
            params: params
        });
    };

    /*
        POST request
    */
    postAjax = (url, params = {}) => {
        return this.httpRequest({
            method: 'POST',
            url: url,
            data: params
        });
    };

    /*
        PATCH request
    */
    patchAjax = (url, params = {}) => {
        return this.httpRequest({
            method: 'PATCH',
            url: url,
            data: params
        });
    };

    /*
        DELETE request
    */
    deleteAjax = (url) => {
        return this.httpRequest({
            method: 'DELETE',
            url: url
        });
    };

}