import React from 'react';
import '../../global/GlobalStyles.css';

const Card = (props) => {

    return(
        <>
            <div
                className='cardAppointment shadow-2xl shadow-gray rounded-md my-3 sm:my-0 p-1 border border-gray-400 hover:border-gray-600 hover:border hover:scale-105 justify-center transition duration-150 ease-out hover:cursor-pointer'
            >{props.children}</div>
        </>
    )
}

export default Card;