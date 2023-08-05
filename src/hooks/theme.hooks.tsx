import { Themes } from "@/constants/themes";
import { ThemeContext } from "@/contexts/theme.context";
import { useContext } from "react";

interface ThemeHook {
    theme: string;
    toggleTheme: () => void;
}

export function useTheme(): ThemeHook {
    // Obtenemos el contexto
    const context = useContext(ThemeContext);

    // Si no hay contexto, lanzamos un error
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    
    // Obtenemos el tema y la funcion para cambiarlo
    const { theme, setTheme } = context;

    // Funcion para cambiar el tema
    const toggleTheme = () => {
        if (theme === Themes.Light) {
            setTheme(Themes.Dark);
        } else {
            setTheme(Themes.Light);
        }
    }

    // Retornamos el tema y la funcion para cambiarlo
    return {
        theme,
        toggleTheme
    };
}