import { createSlice,  } from '@reduxjs/toolkit';

const initialState = {
    loading: null,
    error: null,
    message: null,
    complete: null,
    notifactionMsg: null,
    notifactionState: null,
    labelNotification: null,
}

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: initialState,
    reducers: {
        isLoading(state, action){
            state.loading = action.payload
        },
        requestCompleted(state, action){
            state.complete = action.payload
        },
        errorHandler(state, action){
            state.error = true
            state.message = action.payload
        },
        tryAgainFn(state, action){
            state.error = null
            state.message = null
        },
        notifiactionHandler(state, action){
            state.notifactionState = true
            state.notifactionMsg = action.payload.msg
            state.labelNotification = action.payload.titleMsg
        },
        clearNotification(state, action){
            state.notifactionState = null
            state.notifactionMsg = null
        }
    }
})

export const uiActions = uiSlice.actions;