import {useEffect, useRef, useState} from "react";

export const Ex3_RenderCounter=()=>{
    const [val, setVal]=useState("")
    const cnt=useRef(0)
    useEffect(()=>{
        cnt.current+=1
    })
    return(
        <>
            <p>Component render counter</p>
            <input type="text" onChange={(e)=>setVal(e.target.value)}/>
            <p>Num render: {cnt.current}</p>
        </>
    )
}