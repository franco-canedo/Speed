import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Main from './Containers/Main';
import Game from './Containers/Game';




function App() {

  const [game, setState] = useState(false);
  const [remountKey, setRemountKey] = useState((new Date()).getTime());

  const playGame = () => {
    setState(true);
  }

  const rerender = () => {
    console.log('remount');
    setRemountKey((new Date()).getTime());
  }



  return (
    <React.Fragment>

      {
        game ? <Game key={remountKey} rerender={rerender}/> : <Main playGame={playGame}/>
      }

    </React.Fragment>
  )
}

export default App;
