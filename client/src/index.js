
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'; // persist
import { store, persistor} from './redux/store'; // store => redux, persistor(persist)

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));


serviceWorker.register();