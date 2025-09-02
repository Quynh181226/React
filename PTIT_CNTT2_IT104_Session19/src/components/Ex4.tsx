import {useState} from "react";

export const Ex4=()=>{
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [nameError, setNameError]=useState("")
    const [emailError, setEmailError]=useState("")

    const valiName=(val: string)=>{
        if(!val.trim()) return "This field required"
        return ""
    }

    const valiEmail=(val: string)=>{
        if(!val.trim()) return "This field required"
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(val)) return "Invalid email"
        return ""
    }
    const handleSub=(e: FocusEvent)=>{
        e.preventDefault()

        setNameError(valiName(name))
        setEmailError(valiEmail(email))

        if(valiName(name)==="" && valiEmail(email)===""){
            alert("Submit success")
        }
    }

    const styles={
        form: {},
        err: {color: "red"}
    }

    return(
        <form onSubmit={handleSub} style={styles.form}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                {nameError && <p style={styles.err}>{nameError}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {emailError && <p style={styles.err}>{emailError}</p>}
            </div>

            <button type="submit">Gửi</button>
        </form>
    )
}