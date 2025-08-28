import {useReducer} from "react";

type Action={
    type: string,
    payload?: unknown
}
export const Ex1_Increase=()=>{
    const reducer=(state: number, action: Action): number=>{
        switch (action.type){
            case "increase":
                return state+1
            default:
                return state
        }
    }
    const [cnt, dispatch]=useReducer(reducer, 0)
    return(
        <>
            <p>{cnt}</p>
            <button onClick={()=>dispatch({type: "increase"})}>Increase</button>
        </>
    )
}