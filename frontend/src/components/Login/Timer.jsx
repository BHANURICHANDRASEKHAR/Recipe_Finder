import React,{useState,useEffect} from 'react'

export default function Timer({resentotp}) {
    const [time, setTime] = useState(30);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(interval);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);
    useEffect(() => {
        startFunction(); 
    }, []);

    const startFunction = () => {
        setIsActive(true);
    }
    const resetTimer = () => {
        setTime(30);
        setIsActive(true);
        resentotp();
    };

    return (
        <div className='col'>
            <h1 className='text-center'>00:{time < 10 ? `0${time}` : time}</h1>
            <p className='text-center mt-1'>Didn't receive OTP? <button onClick={resetTimer} className='resentbtn' style={{color:setIsActive && time>0?'gray' : 'red'}} disabled={setIsActive && time>0}>Resend Now</button></p>
        </div>
    );
};
