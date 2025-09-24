import { configureStore } from "@reduxjs/toolkit"
import Ex1 from "../slices/Ex1"
import Ex2 from "../slices/Ex2"
import Ex3 from "../slices/Ex3"
import Ex4 from "../slices/Ex4"
import Ex5 from "../slices/Ex5"
import Ex6 from "../slices/Ex6.tsx"
import favoriteReducer from "../slices/favoriteSlice.tsx"

export const Store = configureStore({
    reducer: {
        Count: Ex1,
        RandomList: Ex2,
        ChangeMode: Ex3,
        Grid: Ex4,
        Menubar: Ex5,
        Language: Ex6,
        Favorite: favoriteReducer, // <- đặt tên state rõ ràng
    },
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
