import React, {useState} from 'react';

import Box from '../Components/Box';
 


const Game = () => {

    const [boxes, setState] = useState([
      '1','2','3','4','5','6','7','8','9','10'
    ]); 

    function createBoxes() {
        for(let i = 0; i < 10; i++) {
            console.log('boxes?')
            return <h1>box</h1>
        }
    }


    return (
        <div className='game'>
            <h1 className="gameTitle">Game</h1>
           <div className='gameSpace'>
                {
                      boxes.map(number => {
                          return <Box number={number}/>
                      })
                    
                }
           </div>
        </div>
        
    )
}

export default Game;