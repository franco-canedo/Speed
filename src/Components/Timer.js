import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Timer = (props) => {

    const [timeLeft, setTimeLeft] = useState(10);
    const answerObject = useSelector((state) => state.rightAnswer);

    useEffect(() => {
        if(!timeLeft) {
            // restart makes the modal appear
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