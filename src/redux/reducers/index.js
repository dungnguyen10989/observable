import {combineReducers} from 'redux';
import userReducer from './user';
import numberReducer from './number'

export default combineReducers({
    user: userReducer,
    number: numberReducer
});