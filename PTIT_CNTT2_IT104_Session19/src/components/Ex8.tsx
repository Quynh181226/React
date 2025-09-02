import {type ChangeEvent, useReducer, useState} from "react"
type InputType = {
    username: string
    password: string
}

type ActionType =
    | { type: "Loading" }
    | { type: "Error" }
    | { type: "Success" }
    | { type: "Reset" }

const reducer = (state: string, action: ActionType) => {
    switch (action.type) {
        case "Loading":
            return action.type
        case "Success":
            return action.type
        case "Error":
            return action.type
        case "Reset":
            return ""
        default:
            return state
    }
}

export const Ex8 = () => {
    const [input, setInput] = useState<InputType>({
        username: "",
        password: "",
    })

    const [inputTemp, setInputTemp] = useState<InputType>({
        username: "",
        password: "",
    })

    const [validation, dispatch] = useReducer(reducer, "")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputTemp((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        dispatch({ type: "Loading" })
        setTimeout(() => {
            if (inputTemp.username === "" || inputTemp.password === "") {
                dispatch({ type: "Error" })
            } else if (inputTemp.username === "admin" && inputTemp.password === "123abc") {
                dispatch({ type: "Success" })
            }else{
                dispatch({ type: "Error" })
            }
        }, 2000);
        setTimeout(() => {
            dispatch({ type: "Reset" })
        },5000);
    };

    const styles={
        containerFrom: { gap: "10px" },
        input: { padding: "2%", borderRadius: "3px" },
        fromBtn: {width: "100%", color: "white", backgroundColor: "rgb(2, 123, 254)", padding: "2%", border: "none", borderRadius: "3px",}
    }
    return (
        <div style={styles.containerFrom}>
            <h2>👤 Login</h2>

            <input type="text" name="username" placeholder="Input email" value={inputTemp.username} onChange={handleChange} style={styles.input}/>

            <input type="password" placeholder="Input pas" value={inputTemp.password} onChange={handleChange} name="password" style={styles.input}/>

            <button onClick={handleSubmit} style={styles.fromBtn}>
                Submit
            </button>
            {
                validation === "Loading" ? (<p>⌛ loading</p>)
                : validation === "Success" ? (<p style={{ color: "green" }}>✅ Dang nhap thanh cong</p>)
                : validation === "Error" ? (<p style={{ color: "green" }}>❌ Dang nhap that bai</p>)
                : ("")
            }
        </div>
    )
}
