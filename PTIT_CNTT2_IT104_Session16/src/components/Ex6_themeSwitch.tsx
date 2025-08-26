import { useState } from "react";
import "../index.css";

export const Ex6_themeSwitch = () => {
    const [theme, setTheme] = useState("light");

    const handleSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={theme} style={{ minHeight: "100vh", padding: "20px" }}>

            <h1> {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"} {theme === "dark" ? "Tối" : "Sáng"}</h1>
            <button onClick={handleSwitch} style={{border: "none", borderRadius: "10px"}}>Change theme</button>
        </div>
    );
};

// npm install -D daisyui
// npm install bootstrap
