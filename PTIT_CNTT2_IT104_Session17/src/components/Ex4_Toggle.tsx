import {useState} from "react";

export const Ex4_Toggle=()=>{
    const [status, setStatus]=useState("block")
    const [text, setText]=useState("Hide")

    const handleBtn=()=>{
        setStatus(status==="block"?"none":"block")
        setText(text==="Hide"?"Show":"Hide")
    }

    return(
        <>
            <button onClick={handleBtn}>{text}</button>
            <p style={{display: status}}>Text title</p>
        </>
    )
}