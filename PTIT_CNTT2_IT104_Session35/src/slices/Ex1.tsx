import { createSlice } from "@reduxjs/toolkit";
const initialState: {value: number} = {
    value : 0
}
const Ex1 = createSlice({
    name : "counter",
    initialState,
    reducers: {
        increase : (state) => {state.value += 1},
        decrease : (state) =>{state.value -= 1},
        reset : (state) =>{state.value = 0},
    }
})

export default  Ex1.reducer
export const {increase, decrease,reset} = Ex1.actions
