import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Main from './Containers/Main';
import Game from './Containers/Game';




function App() {

  const [game, setState] = useState(false);

  const playGame = () => {
    setState(true);
  }



  return (
    <React.Fragment>

      {
        game ? <Game/> : <Main playGame={playGame}/>
      }

    </React.Fragment>
  )
}

export default App;
