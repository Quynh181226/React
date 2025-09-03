import {useState} from "react";

export const Ex1=()=>{
    const [val, setVal]=useState("")
    const styles={
        // container: {
        //
        // },
        show: {
            width: "10.5rem",
            backgroundColor: "#FFE6E6",
            border: "#FF8282",
            padding: "5px"
        }
    }
    return(
        // style={styles.container}
        <>
            <p>Check string length input</p>
            <input type="text" placeholder="Input here" value={val} onChange={(e)=>setVal(e.target.value)}/>
            {val.length<5 ? (<p style={styles.show}>String input longer 5 digit</p>):""}
        </>
    )
}