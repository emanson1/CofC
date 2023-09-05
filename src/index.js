import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import 'typeface-roboto';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import OpeningSlider from './Pages/OpeningSlider';
const base = document.querySelector('base');
const baseUrl = base && base.href || '';
const history = createHashHistory({basename: baseUrl});
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
const rootElement = document.getElementById('root');

const configuration = {
  applicationName: 'BlueVilleApp - 1.2.0',
  applicationAcronym:'BV',
  folder:''
};

ReactDOM.render(
  <Provider store={store}>
   <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
  </Provider>,
  rootElement);
registerServiceWorker();
