import {useEffect} from "react";

export const Ex3_Welcome=()=>{
    useEffect(()=>{
        console.log("Component had first render")
    })
    return(
        <>
            <h3>Welcome to our app</h3>
        </>
    )
}