import React, {useState} from 'react';

import Box from '../Components/Box';
 


const Game = () => {

    const [boxes, setState] = useState(['1','2','3','4','5','6','7','8','9','10']); 
    const [colors, setColor] = useState([
        'rgb(153, 255, 153)', 
        'rgb(153, 255, 255)', 
        'rgb(255, 153, 153)', 
        'rgb(153, 255, 153)', 
        'rgb(153, 230, 255)', 
        'rgb(204, 153, 255)'
    ])

    const createBoxes = (boxes) => {
        let i = Math.floor(Math.random() * colors.length);
        console.log(i);
        shuffle(boxes);
        return boxes.map(number => {
            return <Box number={number} color={colors[i]}/>
        })
    }

    const shuffle = (boxes) => {
        let m = boxes.length, t, i;
        while(m) {
            i = Math.floor(Math.random() * m--);

            t = boxes[m];
            boxes[m] = boxes[i];
            boxes[i] = t;
        }
        return boxes;
    }

    const arrayLoop = (boxes) => {
        let i = 0;
        return boxes.map(number => {
            
            if (i < 7) {
                i++;
                return createBoxes(boxes);
                
            } else {
                return;
            }
            
        })
    }


    return (
        <div className='game'>
            <h1 className="gameTitle">Game</h1>
           <div className='gameSpace'>
                
        
                
                {arrayLoop(boxes)}
           </div>
        </div>
        
    )
}

export default Game;