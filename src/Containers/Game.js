import React, { useState } from 'react';

import Box from '../Components/Box';



const Game = () => {

    const [boxes, setState] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
    const [colors, setColor] = useState([
        '#4753fc', 
        '#fc3549',
        '#59d467', 
        '#bfb64b', 
    ])

    const createBoxes = (boxes) => {
        let i = 0;
        let color = ''
        console.log(i);
        shuffle(boxes);
        return boxes.map(number => {
            i = Math.floor(Math.random() * colors.length);
            switch (i) {
                case 0:
                    color = 'blue'
                    break;
                case 1:
                    color = 'red'
                    break;
                case 2:
                    color = 'green'
                    break;
                case 3:
                    color = 'yellow'
                    break;
            }
            return <Box number={number} color={colors[i]} colorString={color}/>
        })
    }

    const shuffle = (boxes) => {
        let m = boxes.length, t, i;
        while (m) {
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