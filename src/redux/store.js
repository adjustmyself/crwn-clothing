import { createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';


// const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

// sagaMiddleware.run()
export const store = createStore(rootReducer,applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default {store, persistor};