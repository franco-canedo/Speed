import React, { useState } from 'react';

const Box = (props) => {
    return (
        <div className='box' style={{backgroundColor: props.color}}>
            <h1>{props.number}</h1>
        </div>
    
    )
}

export default Box;