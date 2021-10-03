import { combineReducers } from 'redux'
import addressReducer from './adresses/reducer';

export default combineReducers({
    addresses: addressReducer,
});