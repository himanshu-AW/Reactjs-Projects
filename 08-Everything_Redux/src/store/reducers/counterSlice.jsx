import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrements:(state)=>{
            state.value-=1;
        },
        incrementByFive:(state,action)=>{
            state.value+=action.payload;
        },
        decrementsByFive:(state,action)=>{
            state.value-=action.payload;
        }
    }
})

export const {increment,decrements,incrementByFive,decrementsByFive} = counterSlice.actions;

export const incrementByFiveAsync = (action) => (dispatch)=>{
    setTimeout(() => {
        dispatch(incrementByFive(action))
    }, 1000);
}

export default counterSlice.reducer;