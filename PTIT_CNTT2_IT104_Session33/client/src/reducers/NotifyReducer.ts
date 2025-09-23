type StateType = {
    message: string;
    style: string;
    status: boolean;
};
const initNotification:StateType = {
    message: "AVBC",
    style: "alert alert-success",
    status: false,
};
type ActionType =
    | { type: "ADDED" }
    | { type: "UPDATED" }
    | { type: "FAILED" }
    | { type: "OFF" };

const notify = (state: StateType = initNotification, action: ActionType) => {
    switch (action.type) {
        case "ADDED":
            return {
                message: "ADDED TO CART SUCCESSFULLY",
                style: "alert alert-success",
                status: true,
            };
        case "UPDATED":
            return {
                message: "UPDATED CART SUCCESSFULLY",
                style: "alert alert-warning",
                status: true,
            };
        case "FAILED":
            return {
                message: "NOT ENOUGH ITEM IN STOCK",
                style: "alert alert-error",
                status: true,
            };

        case "OFF":
            return {
                ...state,
                status: false,
            };
        default:
            return state;
    }
};
export default notify;