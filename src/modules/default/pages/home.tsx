import { useTheme } from "@/modules/_shared/hooks/theme.hooks";

export const HomePage = () => {
    const theme = useTheme();

    return (
        <div>
            <h1>Home</h1>
            <button onClick={theme.toggleTheme}>Change Theme</button>
        </div>
    );
};