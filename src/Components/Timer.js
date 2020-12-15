import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Timer = (props) => {

    const [timeLeft, setTimeLeft] = useState(7);
    const [h1ClassName, setClassName] = useState('h1timer');
    const answerObject = useSelector((state) => state.rightAnswer);

    useEffect(() => {
        if(!timeLeft) {
            // restart makes the modal appear
            props.restart();
            return;
        }
        const timer = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
                changeClassName();
        }, 1000)

        // returned function will be called on component unmount 
        return () => {
            clearInterval(timer);
            
        }
    }, [timeLeft, h1ClassName]);

    const changeClassName = () => {
        h1ClassName === 'h1timer' ? setClassName('h1timerRed') : setClassName('h1timer');
    }

    return (
        <h1 className={h1ClassName}>Time left: {timeLeft}</h1>
    )
}

export default Timer;