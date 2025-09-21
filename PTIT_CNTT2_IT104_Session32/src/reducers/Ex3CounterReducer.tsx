import type { Ex3CounterAction } from "../actions/Ex3CounterAction.ts";

const Ex3CounterReducer = (state: number = 0, action: Ex3CounterAction) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            return state;
    }
};
export default Ex3CounterReducer;