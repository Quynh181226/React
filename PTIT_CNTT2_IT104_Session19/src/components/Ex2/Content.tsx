import { useContext } from 'react'
// import { ThemeProvider } from './ThemeProvider'
import { ThemeContext } from './ThemeContext'
export const Content = () => {
    const context = useContext(ThemeContext)
    if(!context) return null
    const { theme, toggleTheme} = context
    return (
        <div style={{alignContent:"center", justifyContent:"center", border:"none", boxShadow:"none"}}>
            <button onClick={toggleTheme}  style={{borderRadius:"5px", backgroundColor:"#1A1A1A", color:"white", width:"8rem", padding: "8px", marginLeft: "4rem"}} >Toggle theme</button>
            <p style={{color: theme !== "dark"? "black": "white" }}>This main app</p>
            <p style={{color: theme !== "dark"? "black": "white" }}>Theme curr: <span style={{fontWeight: "bold"}}>{theme}</span></p>
        </div>
    )
}