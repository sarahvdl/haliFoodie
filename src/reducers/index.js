import {combineReducers} from 'redux';
import restaurantReducer from './restaurantReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  restaurantReducer,
  ajaxStatusReducer
});

export default rootReducer;
