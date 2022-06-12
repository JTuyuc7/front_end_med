import React from 'react';
import { useHistory } from 'react-router-dom';
import { uiActions } from '../../features/uiSlice';
import { useDispatch } from 'react-redux';
import '../../global/GlobalStyles.css';

const ErrorPage =  ({message, onTryAgain, onGoHome}) => {
    const history = useHistory();
    const dispatch = useDispatch()

    const goHomeHandler = () => {
        history.replace('/all');
        dispatch(uiActions.tryAgainFn())
    }

    return(
        <>
            <div className=' w-max flex-1 mt-52 sm:mt-44 md:mt-24 min-h-screen items-center justify-center flex'>
                <div className='pb-16 justify-center flex items-center flex-col'>
                    <h2 className='strongColor py-4 uppercase font-mono font-medium'>{message}</h2>

                    <div className='flex gap-5 flex-col sm:flex-row'>
                        {
                            onGoHome && (
                                <button
                                    onClick={goHomeHandler}
                                    className='saveEditButton py-3 px-8 uppercase'
                                >Go Home</button>
                            )
                        }
                        <button
                            onClick={onTryAgain}
                            className='detailsButton py-3 px-8 uppercase'
                        >Try again</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;