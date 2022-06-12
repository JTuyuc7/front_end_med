import React from 'react';
import { useSelector } from 'react-redux';
import AppointmentGraphic from '../components/Appointments/AppointmentGraphic';

const Graphic = () => {

    let childs = 0;
    let teenagers = 0;
    let adults = 0;
    let data = []
    const { appointments } = useSelector((state) => state.appointment);

    appointments.forEach( (ele) => {
        if(Number(ele.age) < 10){
            childs += 1
        }else if (Number(ele.age) > 10 && Number(ele.age) < 18){
            teenagers+=1
        }else if (Number(ele.age) > 18){
            adults += 1
        }
    })

    data = [childs, teenagers, adults]

    return(
        <>
            <div className='flex flex-col mt-52 sm:mt-44 md:mt-24'>

                <h2 className='titleAppointments py-3 font-semibold text-center uppercase'>Patient Chart</h2>
                <AppointmentGraphic data={data} />
            </div>
        </>
    )
}

export default Graphic