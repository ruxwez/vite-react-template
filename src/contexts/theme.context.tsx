import { LocalStorageKeys } from '@/constants/LocalStorageKeys'
import { createContext, useEffect, useState } from 'react'

interface ThemeContextProps {
    children: React.ReactNode
}

interface ThemeContextState {
    theme: string
    setTheme: (theme: string) => void
}

// Creamos el ThemeContext 
export const ThemeContext = createContext<ThemeContextState | undefined>(undefined)

// Creamos el ThemeProvider
export const ThemeProvider = (props: ThemeContextProps) => {
    // Obtenemos el tema del localStorage o ponemos el por defecto
    const [theme, setT] = useState(window.localStorage.getItem('theme') || 'light')
    
    // Cambiamos el tema del body dependiendo del tema
    useEffect(() => {
        document.body.className = theme
    }, [theme])

    // Funcion para cambiar el tema
    const setTheme = (theme: string) => {
        setT(theme)
        localStorage.setItem(LocalStorageKeys.Theme, theme)
    }

    return <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
        {props.children}
    </ThemeContext.Provider>
}