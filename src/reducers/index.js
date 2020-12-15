import {combineReducers} from 'redux';
import reducer from './reducer';
import inventory from './inventory';
import answer from './answer';
import rightAnswer from './rightAnswer';
import selectAnswer from './selectAnswer';
import score from './score';

const allReducers = combineReducers({
  toggle: reducer,
  inventory: inventory, 
  answer: answer,
  rightAnswer: rightAnswer,
  selectAnswer: selectAnswer,
  score: score,
})

export default allReducers;