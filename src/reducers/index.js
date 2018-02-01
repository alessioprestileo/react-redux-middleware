import { combineReducers } from 'redux';
import userInfo from './userInfo';
import maps from './maps';

const topReducer = combineReducers({
	userInfo,
	maps
});

export default topReducer;