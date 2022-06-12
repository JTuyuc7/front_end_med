import React, { useEffect } from 'react';
import EditAppointmentForm from '../components/Appointments/EditAppointmentForm';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editAppointmentAction } from '../services/appointmentService';
import { uiActions } from '../features/uiSlice';

const EditData = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { appointment } = useSelector( (state) => state.appointment)
    const { complete } = useSelector((state) => state.ui)

    const onEditDataHandler = (editData) => {
        dispatch(editAppointmentAction(editData))
    }

    const onCancelHandler = () => {
        history.replace('/all')
    }

    useEffect(() => {
        if(complete){
            history.replace('/all')
            dispatch(uiActions.requestCompleted(null))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[complete])

    return(
        <>
            <div className='mt-52 sm:mt-44 md:mt-24'>
                
                <EditAppointmentForm onCancel={onCancelHandler} valueApp={appointment} onEditData={onEditDataHandler}/>
            </div>
        </>
    )
}

export default EditData;