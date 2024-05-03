import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
 const [time, setTime] = useState(new Date());

 useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
 }, []);

 return (
    <h2 className='fs-3 ps-1'>{time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} </h2>
 );
};

export default TimeDisplay;

