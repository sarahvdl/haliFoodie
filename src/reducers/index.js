import {combineReducers} from 'redux';
import restaurants from './restaurantReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  restaurants,
  ajaxStatusReducer
});

export default rootReducer;
