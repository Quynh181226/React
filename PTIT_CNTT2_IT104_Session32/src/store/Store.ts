import { combineReducers, createStore } from "redux";
import Ex1ProfileReducer from "../reducers/Ex1ProfileReducer.tsx";
import Ex2ListUserReducer from "../reducers/Ex2ListUserReducer.tsx";
import Ex3CounterReducer from "../reducers/Ex3CounterReducer.tsx";
import Ex4RandomReducer from "../reducers/Ex4RandomNumberReducer.tsx";
import Ex5ChangeStateReducer from "../reducers/Ex5ChangeStateReducer.tsx";
import Ex6ThemeReducer from "../reducers/Ex6ThemeReducer.tsx";
import Ex7Reducer from "../reducers/Ex7Reducer.tsx";

const rootReducer=combineReducers({
    Profile: Ex1ProfileReducer,
    List: Ex2ListUserReducer,
    counter: Ex3CounterReducer,
    random : Ex4RandomReducer,
    changeState : Ex5ChangeStateReducer,
    theme: Ex6ThemeReducer,
    account : Ex7Reducer,
})

export type RootType=ReturnType<typeof rootReducer>
const Store=createStore(rootReducer)

export default Store