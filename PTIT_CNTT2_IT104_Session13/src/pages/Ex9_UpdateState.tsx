import {useState} from "react";

export const Ex9_UpdateState=()=>{
    const [name, setName]=useState("Ra")
    const changName=()=>{
        setName('Rs')
    }
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <h3>Company name: {name}</h3>
            <button onClick={changName} style={{width: "10%"}}>Change</button>
        </div>
    )
}