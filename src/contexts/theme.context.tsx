import { createContext, useEffect, useState } from 'react'

interface ThemeContextProps {
    children: React.ReactNode
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props: ThemeContextProps) => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')

        // En el caso de existir un tema en el localStorage, se establece como tema actual
        if(localTheme) {
            setTheme(localTheme)
        }
    }, [])

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
        {props.children}
    </ThemeContext.Provider>
}