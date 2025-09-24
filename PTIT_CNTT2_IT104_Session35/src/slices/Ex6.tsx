import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    viet: "Hoc vien Ptit",
    eng: "Post and Telecommunications Institute of Technology",
    mode: "viet"
}

const Ex6 = createSlice({
    name: "Language",
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                mode: action.payload === "viet" ? "viet" : "eng"
            }
        }
    }
})

export default Ex6.reducer
export const { changeLanguage } = Ex6.actions
