import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    colorSchemes: {
        light: true,
        dark: true,
    },
});

const MUIProvider = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme} defaultMode="light">
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    );
};

export default MUIProvider;