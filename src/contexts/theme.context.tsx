import { createContext, useEffect, useState } from 'react'

interface ThemeContextProps {
    children: React.ReactNode
}

interface ThemeContextState {
    theme: string
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextState | undefined>(undefined)

export const ThemeProvider = (props: ThemeContextProps) => {
    const [theme, setT] = useState(window.localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    const setTheme = (theme: string) => {
        setT(theme)
        localStorage.setItem("theme", theme)
    }
   

    return <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
        {props.children}
    </ThemeContext.Provider>
}