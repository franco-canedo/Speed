import React, {useState} from 'react';

import useSound from 'use-sound';
import airhorn from '../audioclips/airhorn.mp3';



const Main = (props) =>  {
    const [play] = useSound(airhorn);

    return (
        <div className='main'>
            <h1 className="title">Test your mind</h1>
            <div className='playButton'>
            <button className='btn btn-dark btn-lg' onClick={() => {
                play();
                props.playGame();
                }}>Play!</button>
            </div>
            
        </div>
        
    )
}

export default Main;