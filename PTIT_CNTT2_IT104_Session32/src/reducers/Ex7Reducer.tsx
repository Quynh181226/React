
import type { Ex7Action } from "../actions/Ex7Action.ts";
import type { AccountType } from "../actions/Ex7Action.ts";
type StateType = {
    registered: boolean;
    account: AccountType;
};
const initialState: StateType = {
    registered: false,
    account: { email: "", password: "" },
};
const Ex7Reducer = (
    state: StateType = initialState,
    action: Ex7Action
) => {
    switch (action.type) {
        case "REGISTER":
            console.log("Reducer nhận REGISTER với payload:", action.payload);
            return {
                ...state,
                registered: false,
                account: action.payload,
            };
        case "LOGIN":
            console.log("Reducer nhận REGISTER với payload:", action.payload);
            return {
                ...state,
                registered: true,
                account: action.payload,
            };
        default:
            return state;
    }
};
export default Ex7Reducer;
