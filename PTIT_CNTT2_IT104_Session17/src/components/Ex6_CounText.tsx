import {useState} from "react";

export const Ex6_CounText=()=>{
    const [InputText, setInputText]=useState("")
    return(
        <>
            <textarea value={InputText} onChange={(e)=>setInputText(e.target.value)}></textarea>
            <p>Digit num: {InputText.length}</p>
        </>
    )
}