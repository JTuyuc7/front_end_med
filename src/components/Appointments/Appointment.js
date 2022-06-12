import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card';
import '../../global/GlobalStyles.css';
import ModalConfirmation from '../UI/ModalConfirmation';
import { useDispatch } from 'react-redux';
import { removeAppointment } from '../../services/appointmentService';
import { formatDateHelper } from '../helpers/formatDateHelper';

const Appointment = ({appointment}) => {
    const dispatch = useDispatch()
    const histoy = useHistory();
    const [ modalOpen, setModalOpen ] = useState(false);

    var date = new Date(appointment.date).toUTCString();
    let formated_date = date.split(' ')
    const date_formated = formatDateHelper(formated_date);

    const detailsHandler = () => {
        histoy.push(`/appointment-detail/${appointment._id}`)
        //dispatch(getSingleAppointmentAction(appointment.id))
    }

    const deleteHandler = () => {
        setModalOpen(true);
    }

    const cancelHandler = () => {
        setModalOpen(false)
    }

    const onConfirmDelete = () => {
        dispatch(removeAppointment(appointment._id))
        setModalOpen(false)
    }

    return(
        <>
            <Card>
                <div className='mb-8 md:mb-0 p-3 rounded-md '>
                        {
                            modalOpen && ( <ModalConfirmation open={modalOpen} onCancel={cancelHandler} name={appointment.name} onConfirm={onConfirmDelete} />)
                        }
                    <div>
                        <h2 className='font-light' style={{ color: '#9e6f46'}}>Patient: <span className='font-medium font-mono' style={{color: "#774f2a"}}>{appointment.name} {appointment.lastName}</span></h2>
                        <h2 className='font-light' style={{ color: '#9e6f46'}}>Date: <span className='font-medium font-mono' style={{color: "#774f2a"}}>{date_formated}</span></h2>
                    </div>

                    <div className='buttonContainer grid grid-cols-2 gap-3 mt-4'>
                        <button
                            onClick={deleteHandler}
                            className='deleteButton text-center uppercase text-sm font-semibold items-center py-1'
                        >Delete</button>
                        
                        
                        <button
                            onClick={ () => detailsHandler()}
                            className='detailsButton text-center uppercase text-sm font-semibold items-center py-1'
                        >Details</button>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Appointment;

/*
    const convertDate = (dateArr) => {
        let formated_year = dateArr[3]
        let formated_month = dateArr[2]
        let formatd_day = dateArr[1]
        return `${formated_year}-${formated_month}-${formatd_day}`.toUpperCase()
    }
    let new_date_formated = convertDate(formated_date)
    
    const formatDate = (date) => {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let formatted_date = date.getDay() + "-" + months[date.getMonth()] + "-" + date.getFullYear()
        console.log(date.getDate(), 'que es')
        return formatted_date;
    }

*/