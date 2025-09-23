import type { Ex4RandomNumberAction } from "../actions/Ex4RandomNumberAction.ts"

const Ex4RandomReducer = (state: number[] = [], action:Ex4RandomNumberAction)=>{
    switch(action.type){
        case "RANDOM":
            return [...state, action.payload]
        default:
            return state
    }

}
export default Ex4RandomReducer
