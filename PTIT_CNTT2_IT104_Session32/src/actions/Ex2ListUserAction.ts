import type {ProfileType} from "../reducers/Ex1ProfileReducer.tsx";

export type Ex1ProfileAction = { type: "LOAD" } | { type: "UPDATE", payload: ProfileType }