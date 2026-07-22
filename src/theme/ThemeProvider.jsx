import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    colorSchemes: { light: true, dark: true },
});

const ThemeProvider = ({ children }) => {
    return (
        <>

            <MuiThemeProvider theme={theme} defaultMode="light" noSsr={false}>
                <CssBaseline enableColorScheme />
                {children}
            </MuiThemeProvider>
        </>
    );
};

export default ThemeProvider;