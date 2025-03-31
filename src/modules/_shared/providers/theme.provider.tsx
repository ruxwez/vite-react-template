import { useEffect, useState } from 'react'
import { LocalStorageKeys } from '../libs/constants/localStorageKeys'
import { Themes } from '../libs/constants/themes'
import { ThemeContext, ThemeContextState } from '../contexts/theme.context'

interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Themes
}

// We create the ThemeProvider
export const ThemeProvider = ({children, defaultTheme}: ThemeProviderProps) => {
    if (!defaultTheme) {
        defaultTheme = Themes.Light
    }

    // We get the theme from localStorage or set the default one
    const [theme, setT] = useState(window.localStorage.getItem(LocalStorageKeys.Theme) || defaultTheme)

    // We change the body theme depending on the theme
    useEffect(() => {
        document.body.className = theme
    }, [theme])

    // Function to change the theme
    const setTheme = (theme: string) => {
        if (Object.values(Themes).includes(theme as Themes)) {
            setT(theme)
            localStorage.setItem(LocalStorageKeys.Theme, theme)
        } else {
            setT(defaultTheme)
            localStorage.setItem(LocalStorageKeys.Theme, defaultTheme)
        }
    }

    const value: ThemeContextState = {
        theme,
        setTheme
    }

    return <ThemeContext value={value}>
        {children}
    </ThemeContext>
}