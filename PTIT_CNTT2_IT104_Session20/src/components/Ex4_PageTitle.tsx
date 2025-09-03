import {useEffect, useState} from "react";

export const Ex4_PageTitle=()=>{
    const [name, setName]=useState("")
    useEffect(()=>{
        document.title=`Hello, ${name}`
    }, [name])
    return(
        <>
            <h3>Welcome to our page</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Title will change as you input the field</p>
        </>
    )
}