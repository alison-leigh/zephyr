import React from 'react';

const CurrentDateData = ()=> {

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('deafult', {month: 'long', day: 'numeric'});

    return (
        <h2 className='h4 text-secondary'>{formattedDate}</h2>

    );
};
export default CurrentDateData;