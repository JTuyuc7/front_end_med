import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../global/GlobalStyles.css';
import AppointmentForm from '../components/Appointments/AppointmentForm';
import { useDispatch } from 'react-redux';
import { addNewAppointment } from '../services/appointmentService';
import { useSelector } from 'react-redux';
import { uiActions } from '../features/uiSlice';

const NewEntry = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { complete } = useSelector((state) => state.ui)

    useEffect(() => {
        if(complete){
            history.push('/all')
            dispatch(uiActions.requestCompleted(null))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[complete])

    const onAddAppointmentHandler = (data) => {
        dispatch(addNewAppointment(data))
        //history.push('/all')
    }

    return(
        <>
            <div>
                <AppointmentForm onAddData={onAddAppointmentHandler} />
            </div>
        </>
    )
}

export default NewEntry;
