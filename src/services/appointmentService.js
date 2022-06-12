import { createAsyncThunk } from '@reduxjs/toolkit';
import { uiActions } from '../features/uiSlice';
import { appointmentActions } from '../features/appointmentsSlice';
import axiosClient from '../config/axios';

export const getAllAppointments = createAsyncThunk(
    'getAllappoitments',
    async (_, thunkApi) => {
        try {
            thunkApi.dispatch(uiActions.isLoading(true))
            const appointments = await axiosClient.get('/api/appointments');
            thunkApi.dispatch(appointmentActions.getAllAppointmentsInfo(appointments.data.appointments))
            thunkApi.dispatch(uiActions.isLoading(false))
        } catch (error) {
            thunkApi.dispatch(uiActions.isLoading(false))
            thunkApi.dispatch(uiActions.errorHandler('Unable to get the appointments'))
        }
    }
)

export const addNewAppointment = createAsyncThunk(
    'addNewAppointment',
    async (data, thunkApi) => {
        thunkApi.dispatch(uiActions.isLoading(true))
        try {
            const appointment = await axiosClient.post('/api/appointments', data);
            thunkApi.dispatch(appointmentActions.addNewdata(appointment.data.appointment))
            //thunkApi.dispatch(uiActions.isLoading(false))
            //thunkApi.dispatch(uiActions.requestCompleted(true))
            thunkApi.dispatch(uiActions.notifiactionHandler({msg: appointment.data.msg, titleMsg: 'success'}))
        } catch (error) {
            thunkApi.dispatch(uiActions.notifiactionHandler({msg: 'Unable to save the appointment', titleMsg: 'error'}))
            //thunkApi.dispatch(uiActions.isLoading(false))
            //thunkApi.dispatch(uiActions.requestCompleted(true))
        }
        thunkApi.dispatch(uiActions.requestCompleted(true))
        thunkApi.dispatch(uiActions.isLoading(false))
    }
)

export const removeAppointment = createAsyncThunk(
    'removeAppointment',
    async (id, thunkApi) => {
        try {
            const response = await axiosClient.delete(`/api/appointments/${id}`)
            thunkApi.dispatch(appointmentActions.deleteAppointment(id))
            thunkApi.dispatch(uiActions.notifiactionHandler({msg: response.data.msg, titleMsg: 'success' }))
        } catch (error) {
            thunkApi.dispatch(uiActions.notifiactionHandler({msg: 'Unable to remove the appointment', titleMsg: 'error' }))
        }
    }
)

export const getSingleAppointmentAction = createAsyncThunk(
    'getSingleAppointment',
    async (id, thunkApi) => {
        try {
            thunkApi.dispatch(uiActions.isLoading(true))
            const appointment = await axiosClient.get(`/api/appointments/${id}`)
            thunkApi.dispatch(appointmentActions.getSingleAppointment(appointment.data))
            thunkApi.dispatch(uiActions.isLoading(false))
        } catch (error) {
            thunkApi.dispatch(uiActions.isLoading(false))
            thunkApi.dispatch(uiActions.errorHandler('Opps, seems not to be ok. :('))
        }
    }
)

export const editAppointmentAction = createAsyncThunk(
    'editAppointment',
    async (data, thunkApi) => {

        try {
            thunkApi.dispatch(uiActions.isLoading(true))
            const response = await axiosClient.put(`/api/appointments/${data.id}`, data)
            thunkApi.dispatch(appointmentActions.editAppointmentData(response.data.appointment))
            thunkApi.dispatch(uiActions.requestCompleted(true))
            thunkApi.dispatch(uiActions.isLoading(false))
            thunkApi.dispatch(uiActions.notifiactionHandler({msg: response.data.msg, titleMsg: 'success' }))

        } catch (error) {
            thunkApi.dispatch(uiActions.isLoading(false))
            thunkApi.dispatch(uiActions.requestCompleted(true))
            thunkApi.dispatch(uiActions.notifiactionHandler({msg: 'Unable to edit the appointment', titleMsg: 'error' }))
        }
    }
)