import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
    const history = useHistory()
    const handlerGoHome = () => {
        history.replace('/all')
    }

    return(
        <>
            <div className='w-max flex-1 mt-52 sm:mt-44 md:mt-24'>
                <div className='flex justify-center flex-col items-center pt-32'>
                    <h1> <strong>{'Opps :('}</strong>   {'Seems like this page does not exist'}</h1>
                    <button
                        className='detailsButton px-10 py-3 uppercase font-mono font-semibold mt-8'
                        onClick={handlerGoHome}
                    >Go Home</button>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage;