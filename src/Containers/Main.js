import React, {useState} from 'react';



const Main = (props) =>  {
    return (
        <div className='main'>
            <h1 className="title">Test your mind</h1>
            <button className='playButton' onClick={props.playGame}>Play!</button>
        </div>
        
    )
}

export default Main;