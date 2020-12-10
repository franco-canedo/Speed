import React, { useEffect, useState } from 'react';

const Box = (props) => {

    const [className, setClassName] = useState('box');
    const [clicked, setClicked] = useState(false);
    const [color, setColor] = useState(props.color);

    useEffect(() => {
        clearInterval();
    })

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
        className={className} 
        style={{ backgroundColor: props.color }} 
        onClick={clickCard}>
            <div className='face'>
                <h1>{props.number}</h1>
            </div>
            
        </div>

    )
}

export default Box;