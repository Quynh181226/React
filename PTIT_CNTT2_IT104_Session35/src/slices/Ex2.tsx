import { createSlice } from "@reduxjs/toolkit"

const initialState: number[] = []

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}

const Ex2 = createSlice({
    name: "RandomList",
    initialState,
    reducers: {
        random: (state) => {
            for (let i = 0; i < getRandomInt(15); i++) {
                state.push(getRandomInt(10))
            }
        },
        resetList: () => {
            return []
        }
    }
})

export const { random, resetList } = Ex2.actions
export default Ex2.reducer
