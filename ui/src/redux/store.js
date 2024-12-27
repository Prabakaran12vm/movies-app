import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query/react'
import authreducer from './features/auth/authSlice'
import {apiSlice} from '../redux/api/apiSlice'

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authreducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(apiSlice.middleware),
    devTools:true
})


setupListeners(store.dispatch)
 
export default store;