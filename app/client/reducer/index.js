import { combineReducers } from 'redux';
import fetchCountReducer from './fetchCountReducer';
const reducer = combineReducers({ fetchCountReducer });
export default reducer;
