import {combineReducers} from 'redux';
import reducer from './reducer';
import inventory from './inventory';
import answer from './answer';
import rightAnswer from './rightAnswer';
import selectAnswer from './selectAnswer';

const allReducers = combineReducers({
  toggle: reducer,
  inventory: inventory, 
  answer: answer,
  rightAnswer: rightAnswer,
  selectAnswer: selectAnswer,
})

export default allReducers;