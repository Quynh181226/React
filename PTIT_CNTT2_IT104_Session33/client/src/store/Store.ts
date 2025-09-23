import { combineReducers, createStore } from "redux";
import cartReducer from "../reducers/CartReducer.ts";
import productReducer from "../reducers/ItemReducer.ts";
import notify from "../reducers/NotifyReducer.ts";
const rootReducer = combineReducers({
    products : productReducer,
    cart : cartReducer,
    notification : notify
})
export type RootType = ReturnType<typeof rootReducer>
const Store = createStore(rootReducer)
export default Store