
import React from "react";
import { ThemeProvider } from "./modules/_shared/providers/theme.provider";
import { Themes } from "./modules/_shared/libs/constants/themes";

export const GlobalContexts = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <React.Fragment>
            <ThemeProvider defaultTheme={Themes.Light}>
                {children}
            </ThemeProvider>
        </React.Fragment>
    );
};