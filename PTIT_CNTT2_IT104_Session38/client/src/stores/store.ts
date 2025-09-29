import { configureStore } from "@reduxjs/toolkit";
import {bookReducer} from "../slices/bookSlice";

export const store = configureStore({
    reducer: {
        book: bookReducer
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;