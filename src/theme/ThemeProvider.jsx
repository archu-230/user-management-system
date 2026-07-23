import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    colorSchemes: {
        light: true,
        dark: true,
    },
});

const ThemeProvider = ({ children }) => {
    return (
        <>
            <InitColorSchemeScript attribute="class" />
            <MuiThemeProvider theme={theme} defaultMode="light">
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </>
    );
};

export default ThemeProvider;