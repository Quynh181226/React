import type {Ex1ProfileAction} from "../actions/Ex1ProfileAction.ts";
export type ProfileType = {
    id: number;
    fullName: string;
    gender: "Female" | "Male";
    birthDate: string;
    address: string;
}

const init: ProfileType = {
    id: 1,
    fullName: "NVA",
    gender: "Male",
    birthDate: "12-02-2000",
    address: "NTS"
}

export const Ex1ProfileReducer = (state: ProfileType = init, action: Ex1ProfileAction) => {
    switch (action.type) {
        case "LOAD":
            return state
        case "UPDATE":
            return action.payload
        default:
            return state
    }
}

export default Ex1ProfileReducer;