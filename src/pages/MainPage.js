import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Appointment from '../components/Appointments/Appointment';
import '../global/GlobalStyles.css';
import { getAllAppointments } from '../services/appointmentService';
import { uiActions } from '../features/uiSlice';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/UI/Spinner';
import ErrorPage from '../components/UI/ErrorPage';
import AlertComponent from '../components/UI/AlertComponent';

const MainPage = () => {
    const dispatch = useDispatch()
    const { appointments } = useSelector( (state) => state.appointment);
    const { loading, error, message, notifactionState, notifactionMsg, labelNotification } = useSelector((state) => state.ui);
    useEffect(() => {
        dispatch(getAllAppointments())
    },[dispatch])

    const tryAgainHanlder = () => {
        dispatch(uiActions.tryAgainFn())
        dispatch(getAllAppointments())
    }
    const onCloseHandler = () => {
        dispatch(uiActions.clearNotification())
    }

    if(loading){
        return <Spinner  />
    }

    if(error){
        return(
            <ErrorPage message={message} onTryAgain={tryAgainHanlder} />
        )
    }

    return(
        <>
            <div className='w-max flex-1 mt-52 sm:mt-44 md:mt-24'>
                {
                    notifactionState && (<AlertComponent severity={labelNotification} title={notifactionMsg} color={labelNotification} onClose={onCloseHandler} /> )
                }
                {
                    appointments.length === 0 ? (
                        <h3 className='titleAppointments py-3 font-semibold text-center uppercase'>No Appointments yet <strong ><Link className='text-gray-700 hover:text-blue-800' to='/new-entry'>Add One</Link></strong></h3>
                    ): (
                        <h3 className='titleAppointments py-3 font-semibold text-center uppercase'>All Appointments</h3>
                    )
                }
                <div className='sm:grid-cols-2 sm:grid gap-6 px-6 xl:grid-cols-3 my-5'>
                    { appointments.map((ele) => {
                        return(
                            <Appointment 
                                key={ele._id}
                                appointment={ele}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MainPage;

/*
complete && (
                        <div className='px-7'>
                            <Alert severity="success" color="success">
                                <AlertTitle>Success</AlertTitle>
                                <strong>Added correctly</strong>
                            </Alert>
                        </div>
                    )
*/