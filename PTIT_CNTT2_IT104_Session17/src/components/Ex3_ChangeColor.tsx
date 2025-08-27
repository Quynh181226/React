import {useState} from "react";

export const Ex3_ChangeColor=()=>{
    const [color, setColor]=useState("black")
    const handleChange=()=>{
        setColor(color==="black"?"red":"black")
    }
    const colorBtn={
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "6px 12px",
        cursor: "pointer",
        borderRadius: 5,
        fontSize: 14
    }

    return(
        <>
            <p style={{color}}>Text Title</p>
            <button onClick={handleChange} style={colorBtn}>Change color</button>
        </>
    )
 }