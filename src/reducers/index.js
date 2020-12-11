import {combineReducers} from 'redux';
import reducer from './reducer';
import inventory from './inventory';

const allReducers = combineReducers({
  toggle: reducer,
  inventory: inventory, 
})

export default allReducers;