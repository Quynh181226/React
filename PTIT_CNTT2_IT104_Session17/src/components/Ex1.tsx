import {useState} from "react";

export const Ex1=()=>{
    const [state]=useState("Quynh")
    return <>Name: {state}</>
}