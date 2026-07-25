import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const MUIProvider = ({ children }) => {
    return (
        <>
            <InitColorSchemeScript attribute="class" />
            <ThemeProvider theme={theme} defaultMode="light">
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    );
};

export default MUIProvider;