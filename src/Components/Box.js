import React, { useEffect, useState } from 'react';
import { useUID, useUIDSeed } from 'react-uid';

import { useSelector, useDispatch, connect } from 'react-redux';
import { addInventory } from '../actions';
import { addAnswer } from '../actions';

const Box = (props) => {

    const [className, setClassName] = useState('box');
    const [clicked, setClicked] = useState(false);
    const [color, setColor] = useState('');
    const [number, setNumber] = useState(0);
    const uid = useUID();  

    const toggle = useSelector((state) => state.toggle);
    const dispatch = useDispatch();

    useEffect(() => {
        setColor(props.color);
        setNumber(props.number);
        const boxObject = {
            id: uid,
            color: props.color,
            number: props.number
        }
        dispatch(addInventory(boxObject));
    }, []);

    const clickCard = () => {
        if (className == 'box') {
            setClassName('boxClicked')
        } else {
            setClassName('box');
        }
        
        setClicked(prevState => !prevState.clicked)
    }

    return (
        
        <div 
        id={uid}
        className={className} 
        style={{ backgroundColor: color }} 
        onClick={() => {
            clickCard();
            props.checkAnswer(number, color);
            }}>
            <div className='face'>
                <h1>{number}</h1>
            </div>
            
        </div>

    )
}

export default Box;