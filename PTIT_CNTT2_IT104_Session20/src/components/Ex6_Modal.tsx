import {useEffect, useRef, useState} from "react";

export const Ex6_Modal=()=>{
    const [name, setName]=useState("")
    const [open, setOpen]=useState(false)
    const inputRef=useRef<HTMLInputElement>(null)
    const styles={
        openBtn: {
            background: "#4CAF50",
            borderRadius: "3px",
            padding: "8px",
            border: "none",
            color: "white"
        },
        closeBtn: {
            background: "#F44336",
            borderRadius: "3px",
            padding: "8px",
            border: "none",
            color: "white",
            width: "18%"
        },
        model: {
            gap: "6px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            background: "#FFFFFF",
            padding: "18px 6px",
            borderRadius: "5px"
        },
        modalContainer: {
            fontFamily: "Arial, sans-serif"
        },
        modalContent: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        },
        overlay: {
            position: "fixed" as const,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        },
        input: {
            width: "80%",
            padding: "8px",
            borderRadius: "4px",
            marginBottom: "10px"
        }
    }
    useEffect(()=>{
        inputRef.current?.focus()
    }, [open])
    return(
        <div style={styles.modalContainer}>
            <div style={styles.modalContent}>
                <h2>App React with Modal and focus Input</h2>
                <button style={styles.openBtn} onClick={()=>setOpen(true)}>Open Modal</button>
            </div>
            {open&&
                <div style={styles.overlay}>
                    <div style={styles.model}>
                        <h3>Login</h3>
                        <input type="text" ref={inputRef} style={styles.input} placeholder="Input user name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <button style={styles.closeBtn} onClick={()=>setOpen(false)}>Close</button>
                    </div>
                </div>
            }
        </div>
    )
}