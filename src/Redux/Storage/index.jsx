export const initialState = {
    token: '',
    isAuthenticated: false,
    isExpired: false,
    user: {},
}

export default class Storage {
    static LoadState = () => {
        try {
            const sessionState = sessionStorage.getItem('state') || {};
            const state = Object.assign({}, JSON.parse(sessionState));
            return state;
        } catch (err) {
            return { ...initialState };
        }
    };

    static SaveState = (state) => {
        try {
            const sessionState = {
                Auth: state.Auth,
            };
            sessionStorage.setItem('state', JSON.stringify(sessionState));
        } catch (err) {
            console.error(err);
        }
    };
}
