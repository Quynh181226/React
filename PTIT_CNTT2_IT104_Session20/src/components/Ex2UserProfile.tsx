import {useState} from "react";

export const Ex2UserProfile=()=>{
    const [name, setName] = useState("")
    const [email, setEmail]=useState("")
    const [infor, setInfor]=useState(false)
    const styles = {
        inforContainer: {
            width: "395px",
            padding: "5px",
            background: "#F0F0F0",
            fontFamily: "Arial, sans-serif",
            display: "flex",
            flexDirection: "column",
            gap: "5px"
        },
        inforBtn: {
            background: "#4CAF50",
            borderRadius: "3px",
            padding: "3px",
            border: "none"
        }, 
        useInfor: {
            background: "#E7F7E7",
            border: "#DDDDDD",
            marginTop: "15px",
            marginBottom: "5px",
            padding: "5px",
            width: "375px"
        }
    }
    const handleClick=()=>{
        setInfor(true)
    }
    return(
        
        <div style={styles.inforContainer}>
            <h3>Infor user</h3>
            <input type="text" placeholder="Input name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Input email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button style={styles.inforBtn} onClick={handleClick}>Send</button>
            {infor&&<div style={styles.useInfor}>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>}
        </div>
    )
}