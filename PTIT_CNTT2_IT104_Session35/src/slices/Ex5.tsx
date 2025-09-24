import { createSlice } from "@reduxjs/toolkit"

const initialState = "expanded"

const Ex5 = createSlice({
    name: "Menubar",
    initialState,
    reducers: {
        toggleMenubar: (state) => {
            return state === "expanded" ? "shrunk" : "expanded"
        }
    }
})

export default Ex5.reducer
export const { toggleMenubar } = Ex5.actions
