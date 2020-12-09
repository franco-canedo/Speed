import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function onlyOnce() {
  console.log('run once');
  return 4;
}

function App() {

  const [state, setState] = useState({count: 4, theme: 'blue'});
  const count = state.count
  const theme = state.theme

  function decrementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count - 1}
    })
  }

  const incrementCount = () => {
    setState(prevState => {
      return {...prevState, count: prevState.count + 1}
    })
  }

  return (
    <React.Fragment>
      <button onClick={decrementCount}>-</button>
  <span>{count}</span>
  <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </React.Fragment>
  )
}

export default App;
