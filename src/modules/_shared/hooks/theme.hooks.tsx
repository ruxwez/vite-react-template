import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.context";
import { Themes } from "../libs/constants/themes";

interface ThemeHook {
    theme: string;
    toggleTheme: () => void;
}

export function useTheme(): ThemeHook {
    // We get the context
    const context = useContext(ThemeContext);

    // If there is no context, we throw an error
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    
    // We get the theme and the function to change it
    const { theme, setTheme } = context;

    // Function to change the theme
    const toggleTheme = () => {
        
        if (theme === Themes.Light) {
            setTheme(Themes.Dark);
        } else {
            setTheme(Themes.Light);
        }
    }

    // We return the theme and the function to change it
    return {
        theme,
        toggleTheme
    };
}