import Reducers from './Reducers';
import Storage from './Storage';
import { createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = Storage.LoadState();

const Store = createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

Store.subscribe(() => {
    Storage.SaveState(Store.getState());
});

export default Store;