import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../slices/taskSlice'

const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
