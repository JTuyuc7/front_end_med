import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSingleAppointmentAction } from '../services/appointmentService';
import ErrorPage from '../components/UI/ErrorPage';
import Card from '../components/UI/Card';
import Spinner from '../components/UI/Spinner';
import {formatDateHelper} from '../components/helpers/formatDateHelper';
import { uiActions } from '../features/uiSlice';
import '../global/GlobalStyles.css';

const Details = () => {
    const histoy = useHistory()
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const { loading, error, message } = useSelector( (state) => state.ui )
    const { appointment } = useSelector( (state) => state.appointment )
    const { name, lastName, age, phone, description, date, } = appointment;
    
    useEffect(() => {
        dispatch(getSingleAppointmentAction(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    var new_date = new Date(date).toUTCString();
    let dateArr = new_date.split(' ');
    const date_formated = formatDateHelper(dateArr)

    const handleEdit = () => {
        histoy.push(`/edit-entry/${appointment._id}`)
    }

    const handleGoBack = () => {
        histoy.goBack()
    }
    const onTryAgainHandler = () => {
        dispatch(getSingleAppointmentAction(id))
        dispatch(uiActions.tryAgainFn())
    }


    if(loading){
        return <Spinner />
    }

    if(error){
        return <ErrorPage message={message} onTryAgain={onTryAgainHandler} onGoHome={true} />
    }

    return(
        <>
            <div className='w-max flex-1 mt-52 sm:mt-44 md:mt-24'>
                <h2 className='titleAppointments py-3 font-semibold text-center uppercase'>Details page</h2>

                <Card>
                    <main className='p-5'>
                        <h3 className='font-medium py-2 pb-5 cardBorder' style={{ color: '#9e6f46'}}>Patient First and last name: <span className='font-medium font-mono' style={{color: "#774f2a"}}>{name}, {lastName}</span></h3> 
                        <h3 className='font-medium py-2 pb-5 cardBorder' style={{ color: '#9e6f46'}}>Patinet phone number: <span className='font-medium font-mono' style={{color: "#774f2a"}}>{phone}</span></h3>
                        <h3 className='font-medium py-2 pb-5 cardBorder' style={{ color: '#9e6f46'}}>Patient age: <span className='font-medium font-mono' style={{color: "#774f2a"}}>{age}</span> years old</h3>
                        <h3 className='font-medium py-2 pb-5 cardBorder' style={{ color: '#9e6f46'}}>Date of appointment <span className='font-medium font-mono' style={{color: "#774f2a"}}>{date_formated}</span></h3>
                        <h4 className='font-medium py-2 pb-5 cardBorder' style={{ color: '#9e6f46'}}>Symptoms: <span className='font-medium font-mono' style={{color: "#774f2a"}}>{description}</span></h4>

                        <div className='flex justify-between py-3 pt-8'>
                            <button
                                className='saveEditButton py-3 px-5'
                                onClick={handleGoBack}
                            >Go back</button>
                            <button
                                className='detailsButton py-3 px-5'
                                onClick={handleEdit}
                            >Edit data</button>
                        </div>
                    </main>
                </Card>
            </div>
        </>
    )
}

export default Details;