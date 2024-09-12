import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice'
import UserReducer from './reducers/UserReducer';
import ProductReducer from './reducers/ProductReducer';

export const  store = configureStore({
    reducer:{
        counter:counterSlice,
        UserReducer:UserReducer,
        ProductReducer:ProductReducer,
    },
})