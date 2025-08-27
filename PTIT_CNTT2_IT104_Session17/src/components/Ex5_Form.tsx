import {useState} from "react";

export const Ex5_Form=()=>{
    const [InputVal, setInputVal]=useState("")
    const colorBtn={
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "6px 12px",
        cursor: "pointer",
        borderRadius: 5,
        outline: "none",
        fontSize: 14,
        color: "#3a3939"
    }
    return(
        <>
            <style>
                {`
                  input::placeholder {
                    color: #ccc;
                    font-weight: normal;
                  }
                `}
            </style>
            <input type="text" value={InputVal} style={colorBtn} placeholder="Input content" onChange={(e)=>setInputVal(e.target.value)}/>
            <p>{InputVal}</p>
        </>
    )
}