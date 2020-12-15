import React, { useEffect, useState } from 'react';

import Box from '../Components/Box';
import Timer from '../Components/Timer';
import RestartModal from '../Components/RestartModal';
import ContinueModal from '../Components/ContinueModal';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from '../actions';
import { answer } from '../actions'

import { connect } from 'react-redux';




const Game = () => {

    const [boxes, setState] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
    const [colors, setColor] = useState([
        '#4753fc', //blue
        '#fc3549', //red
        '#59d467', //green
        '#bfb64b', //yellow
    ]);

    // answer
    const [numberAnswer, setAnswer] = useState('');
    // color of answer
    const [numberColorAnswer, setNumberColor] = useState('');
    const [colorName, setColorName] = useState('');
    const [hasLost, setHasLost] = useState(false);
    const [hasWon, setHasWon] = useState(true);

    const dispatch = useDispatch();
    const answerObject = useSelector((state) => state.rightAnswer);
    const inventory = useSelector((state) => state.inventory);


    useEffect(() => {
        
        let i = Math.floor(Math.random() * colors.length);
        let n = boxes[Math.floor(Math.random() * boxes.length)]
        setAnswer(n);
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
        let answerObject = {
            number: n,
            color: colors[i],
        }
        // right answer into redux
        dispatch(answer(answerObject));
        setColorName(color);
    }, [])

    // check if answers selected are correct
    const checkAnswer = (number, color) => {
        console.log(number, color);
        if (number === numberAnswer && color === numberColorAnswer) {
            console.log('correct');
        } else {
            // restart();
            console.log('wrong answer');
        }
    }

    // create box components
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
            
            // console.log(number, numberAnswer);
            const boxObject = {
                color: colors[i],
                number: number
            }

            if(number === numberAnswer && colors[i] === numberColorAnswer) {
                dispatch(addAnswer(boxObject))
            }

            return <Box
                number={number}
                color={colors[i]}
                colorString={color}
                checkAnswer={checkAnswer} />
        })
    }


    // shuffle array of numbers
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

    // Create 7 rows of boxes
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

    // Logic to see if player lost. 
    const restart = () => {
        setHasLost(check_if_win());
        setHasWon(check_if_win());
        console.log('restart?');
    }

    const check_if_win = () => {
        let selected_boxes_array = [];
        for(const num in inventory) {
            const filtered = inventory[num].filter(box => {
                return box.clicked === true;
            });
            selected_boxes_array = selected_boxes_array.concat(filtered);
        }
        console.log(selected_boxes_array);
        const check_array = selected_boxes_array.filter(box => {
            return box.number !== numberAnswer || box.color !== numberColorAnswer;
        });
        return check_array.length > 0 ? true : false;
    }


    return (
        <div className='game'>
            <div className='gameHeader'>
                <div className='headerDivs'>
                    <h1>Find all the {colorName} {numberAnswer}'s!</h1>
                </div>
                <div className='headerDivs'>
                    <Timer restart={restart} />
                </div>
                <div className='headerDivs'>
                    <h1>Score: </h1>
                </div>
            </div>


            <div className='gameSpace'>
                {arrayLoop(boxes)}
            </div>
            {
                hasLost ? <RestartModal hasLost={hasLost} /> : null
            }
            {
                hasWon ?  null : <ContinueModal hasWon={hasWon} />
            }

        </div>

    )
}

export default Game;

