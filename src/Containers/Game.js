import React, { useEffect, useState } from 'react';

import Box from '../Components/Box';
import Timer from '../Components/Timer';
import RestartModal from '../Components/RestartModal';





const Game = () => {

    const [boxes, setState] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
    const [colors, setColor] = useState([
        '#4753fc',
        '#fc3549',
        '#59d467',
        '#bfb64b',
    ]);

    const [number, setAnswer] = useState('');
    const [numberColor, setNumberColor] = useState('');
    const [colorName, setColorName] = useState('');
    const [createdBoxes, setCreatedBoxes] = useState([]);
    const [hasLost, setHasLost] = useState(false);
    

    useEffect(() => {
        let i = Math.floor(Math.random() * colors.length);
        setAnswer(boxes[Math.floor(Math.random() * boxes.length)]);
        setNumberColor(colors[i]);
        let color = '';
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
        setColorName(color);
    }, [])

    const checkAnswer = (number, color) => {
        console.log(number, color);
    }

    const createBoxes = (boxes) => {
        let i = 0;
        let color = '';
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
            return <Box number={number} color={colors[i]} colorString={color} checkAnswer={checkAnswer} />
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

    const restart = () => {
        setHasLost(true);
        console.log('restart?')
    }


    return (
        <div className='game'>
            <div className='gameHeader'>
                <div className='headerDivs'>
                    <h1>Find all the {colorName} {number}'s!</h1>
                </div>
                <div className='headerDivs'>
                    <Timer restart={restart}/>
                </div>
                <div className='headerDivs'>
                    <h1>Score: </h1>
                </div>
            </div>


            <div className='gameSpace'>
                {arrayLoop(boxes)}
            </div>
            {
                hasLost ?  <RestartModal hasLost={hasLost}/> : null
            }
           
        </div>

    )
}

export default Game;