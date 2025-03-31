import { createContext } from "react"

export interface ThemeContextState {
    theme: string
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextState | undefined>(undefined)
