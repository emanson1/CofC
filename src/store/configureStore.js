import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import createRootReducer from './reducers';

export default function configureStore( history, initialState) {

    //const promise=promise();
    const middleware = [
    routerMiddleware(history),
    thunk, 
    promise()
];

const isDevelopment = process.env.NODE_ENV==='development';

if (isDevelopment){
    middleware.push(logger);
}

const enhancers=[];
if (isDevelopment && typeof window!=='undefined'&& window.devToolsExtension){
enhancers.push(window.devToolsExtension());
}
return createStore(
createRootReducer(history),
initialState,
compose(applyMiddleware(...middleware), ...enhancers)
);
}