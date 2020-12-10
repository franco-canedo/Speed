import React, { useState } from 'react';

const Box = (props) => {
    return (
        <div className='box'>
            <h1>{props.number}</h1>
        </div>
    
    )
}

export default Box;