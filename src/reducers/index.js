import {combineReducers} from 'redux';
import reducer from './reducer';
import inventory from './inventory';
import answer from './answer'

const allReducers = combineReducers({
  toggle: reducer,
  inventory: inventory, 
  answer: answer,
})

export default allReducers;