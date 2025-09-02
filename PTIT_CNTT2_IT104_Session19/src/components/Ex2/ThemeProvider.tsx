import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ReactNode } from 'react'

type ChildrenType = {
    children: (props: {
        theme: string
        toggleTheme: () => void
    }) => ReactNode
}

export const ThemeProvider = ({ children }: ChildrenType) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children({ theme, toggleTheme })}
        </ThemeContext.Provider>
    )
}
