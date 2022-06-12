import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    appointments: [],
    appointment: {},
}

export const appointmentSlice = createSlice({
    name: 'appointmens',
    initialState: initialState,
    reducers: {
        getAllAppointmentsInfo(state,action){
            state.appointments = action.payload
        },
        addNewdata(state, action){
            state.appointments = [action.payload, ...state.appointments]
        },
        deleteAppointment(state, action){
            state.appointments = state.appointments.filter( (ele) => ele._id !== action.payload)
        },
        //getSingleAppointment(state, action){
        //    state.appointment = state.appointments.find( (ele) => ele._id === action.payload )
        //},
        getSingleAppointment(state, action){
            state.appointment = action.payload
        },
        editAppointmentData(state, action){
            state.appointments = state.appointments.map( (ele) => ele._id === action.payload._id ? action.payload : ele )
            state.appointment = action.payload
            console.log(action.payload, 'desde el slice')
        }
    }
})

export const appointmentActions = appointmentSlice.actions;