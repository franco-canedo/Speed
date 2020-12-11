import React, { useEffect, useState } from 'react';
import { useUID, useUIDSeed } from 'react-uid';

const Box = (props) => {

    const [className, setClassName] = useState('box');
    const [clicked, setClicked] = useState(false);
    const [color, setColor] = useState(props.color);
    const [number, setNumber] = useState(props.number);
    const uid = useUID();  


    const clickCard = () => {
        if (className == 'box') {
            setClassName('boxClicked')
        } else {
            setClassName('box');
        }
        
        setClicked(prevState => !prevState.clicked)
    }

    // const interval = () => {
    //    let flash =  setInterval(() => {
    //         if (className == 'box') {
    //             setClassName('boxInterval')
    //         } else if (className = 'boxInterval') {
    //             setClassName('box')
    //         } else {
    //             clearInterval(flash)
    //         }
    //     },1000)
    // }

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