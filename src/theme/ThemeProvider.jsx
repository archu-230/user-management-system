import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    colorSchemes: { light: true, dark: true },
});

const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme} defaultMode="light">
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;