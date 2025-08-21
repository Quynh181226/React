import { useState } from "react"

export const Ex7 = () => {
    const [options, setOptions] = useState({
        theme: "Sáng",
        language: "Tiếng Việt",
    })

    const toggleTheme = () => {
        setOptions((prev) => ({
            ...prev,
            theme: prev.theme === "Sáng" ? "Tối" : "Sáng",
        }))
    }

    const toggleLanguage = () => {
        setOptions((prev) => ({
            ...prev,
            language: prev.language === "Tiếng Việt" ? "Tiếng Anh" : "Tiếng Việt",
        }))
    }

    const isDark = options.theme === "Tối"
    const styles = {
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        padding: "20px",
        border: "1px solid gray",
        marginBottom: "20px",
        fontWeight: "bold",
        width: "35%"
    }

    return (
        <div>
            <div style={styles}>
                <span>Nền: {options.theme}</span>
                <br />
                <span>Ngôn ngữ: {options.language}</span>
            </div>
            <button onClick={toggleTheme} style={{ marginRight: "10px" }}>
                Đổi nền
            </button>
            <button onClick={toggleLanguage}>Đổi ngôn ngữ</button>
        </div>
    )
}
