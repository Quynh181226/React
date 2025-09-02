import { useState } from "react";

export const Ex5 = () => {
    const [quote] = useState([
        "Học, học nữa, học mãi.",
        "Thất bại là mẹ thành công.",
        "Không gì là không thể.",
        "Kiến tha lâu đầy tổ.",
        "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
    ])
    const [randomQuote,setRandomQuote] = useState("Học, học nữa, học mãi.")
    const fetchQuote = ()=>{
        const randomIndex = Math.floor(Math.random()*quote.length)
        setRandomQuote(quote[randomIndex])
    }
    const styles={
        quesContainer: {minWidth:"30%"},
        quesBtn: {
            color: "white",
            width: "40%",
            padding: "2%",
            border: "none",
            borderRadius: "3px",
            backgroundColor: "rgb(2, 123, 254)",
            marginTop:"4%"
        },
        quesText: {
            display: "flex",
            // justefi
        }
    }
    return (
        <div style={styles.quesContainer}>
            <h3>🧠Ques truyen cam hung hom nay</h3>
            <p style={styles.quesText}>"{randomQuote}"</p>
            <button onClick={fetchQuote} style={styles.quesBtn}>
                Lay ques ms
            </button>
        </div>
    );
};