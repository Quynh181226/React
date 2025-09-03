import {useState} from "react";

export const Ex1=()=>{
    const [val, setVal]=useState("")
    const styles={
        container: {
            fontFamily: "Arial, sans-serif",
            padding: " 5px 10px",
            backgroundColor: "#f8f6f6",
            width: "50%",
            boxShadow: "0 2px 6px 2px rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        },
        show: {
            width: "22.2rem",
            backgroundColor: "#FFE6E6",
            border: "1px solid #FF8282",
            borderRadius: "3px",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            color: "#FF5454"
        },
        input1: {
           padding: "0.25rem 6.3rem",
            borderRadius: "3px"
        }
    }
    return(
        <div style={styles.container}>
            <h4>Check string length input</h4>
            <input type="text" placeholder="Input here" value={val} style={styles.input1} onChange={(e)=>setVal(e.target.value)}/>
            {val.length>5 ? (<p style={styles.show}>String input longer 5 digit</p>):""}
        </div>
    )
}