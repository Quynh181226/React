import {useReducer} from "react";
const reducer=(state: number, action: string): number=>{
    switch (action){
        case "increase":
            return state+1
        case "decrease":
            return state-1
        default:
            return state
    }
}
export const Ex7_Counter=()=>{
    const [cnt, dispatch]=useReducer(reducer, 0)
    const styleContent={
        display: "flex",
        gap: "5px"
    }
    return(
        <>
            <p>Cnt num: {cnt}</p>
            <div style={styleContent}>
                <button onClick={()=>dispatch("increase")}>Increase</button>
                <button onClick={()=>dispatch("decrease")}>Decrease</button>
            </div>
        </>
    )
}