import React, {useState} from 'react';



const Main = (props) =>  {
    return (
        <div className='main'>
            <h1 className="title">Test your mind</h1>
            <div className='playButton'>
            <button className='btn btn-dark btn-lg' onClick={props.playGame}>Play!</button>
            </div>
            
        </div>
        
    )
}

export default Main;