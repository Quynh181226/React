
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export const Header = () => {
    const context = useContext(ThemeContext)
    if(!context) return null
    const { theme} = context
    return (
        <h1 style={{color: theme === "dark"? "white" : "black"}}>My Themed App</h1>
    )
}
