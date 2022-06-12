import { configureStore } from '@reduxjs/toolkit';
import { appointmentSlice } from '../features/appointmentsSlice';
import { uiSlice } from '../features/uiSlice';

export const store = configureStore({
    reducer: {
        appointment: appointmentSlice.reducer,
        ui: uiSlice.reducer
    }
})