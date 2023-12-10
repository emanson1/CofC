import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bluevilleReducer from '../reducers/bluevilleReducer';

export default (history) => combineReducers ({
    router: connectRouter(history),
    blueville: bluevilleReducer,
 //   user: userReducer,
});