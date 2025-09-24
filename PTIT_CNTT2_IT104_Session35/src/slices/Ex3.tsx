import { createSlice } from "@reduxjs/toolkit";
const initialState  = "light"
const themeReducer = createSlice({
    name : "ChangeMode",
    initialState,
    reducers : {
        toggle: (state)=>{
            return state = state === "light"? "dark" :"light"
        }
    }
})
export default  themeReducer.reducer
export const {toggle} = themeReducer.actions
