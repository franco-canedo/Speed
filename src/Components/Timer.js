import React, { useEffect, useState } from 'react';

const Timer = (props) => {

    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => {
        if(!timeLeft) {
            props.restart();
            return;
        }
        const timer = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1)   
        }, 1000)

        // returned function will be called on component unmount 
        return () => {
            clearInterval(timer);
            
        }
    }, [timeLeft])

    return (
        <h1>Time left: {timeLeft}</h1>
    )
}

export default Timer;