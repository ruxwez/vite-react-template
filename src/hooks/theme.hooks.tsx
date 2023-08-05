import { ThemeContext } from "@/contexts/theme.context";
import { useContext } from "react";

interface ThemeHook {
    theme: string;
    toggleTheme: () => void;
}

export function useTheme(): ThemeHook {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    const { theme, setTheme } = context;

    // Funcion para cambiar el tema
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return {
        theme,
        toggleTheme
    };
}