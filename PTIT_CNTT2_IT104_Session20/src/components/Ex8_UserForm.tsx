import {useReducer} from "react";

const reducer=(state: {name: string, email: string}, action: {field: string, value: string})=>{
    switch (action.field){
        case "name":
            return {...state, name: action.value}
        case "email":
            return {...state, email: action.value}
        default:
            return state
    }
}

export const Ex8_UserForm=()=>{
    const[state, dispatch]=useReducer(reducer, {name: "", email: ""})

    const styles={
        container: {
            fontFamily: "Arial, sans-serif",
            width: "57%",
            margin: "20px auto",
            padding: "12px 15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            background: "#fafafa"
        },
        label: {
            display: "block",
            margin: "10px 0 5px"
        },
        input: {
            width: "90%",
            padding: "8px",
            marginBottom: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px"
        },
        infoBox: {
            background: "#fff",
            padding: "5px",
            border: "none",
            // color: "#FFFFFF",
            borderRadius: "6px",
            paddingLeft: "18px",
            borderLeft: "3.5px solid #3498DB",
            marginTop: "15px",
            zIndex: 9999
        },
        textInfor:{
            color: "#2C3E6E"
        },
        textStrong: {
            color: "#4787BA"
        },
        textContent: {
            display: "flex",
            justifyContent: "center"
        }
    }

    return(
        <div style={styles.container}>
            <h3 style={styles.textContent}>User Information Form</h3>
            <label style={styles.label}>Name:</label>
            <input type="text" value={state.name} onChange={(e)=>dispatch({field: "name", value: e.target.value})} style={styles.input}/>
            <label style={styles.label}>Email:</label>
            <input type="text" value={state.email} onChange={(e)=>dispatch({field: "email", value: e.target.value})} style={styles.input}/>
            <div style={styles.infoBox}>
                <h4 style={styles.textInfor}>User information:</h4>
                <p><b style={styles.textStrong}>Name:</b>{state.name||"(Not yet input)"}</p>
                <p><b style={styles.textStrong}>Email:</b>{state.email||"(Not yet input)"}</p>
            </div>
        </div>
    )
}
