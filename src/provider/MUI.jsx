import { createTheme, ThemeProvider, useColorScheme } from "@mui/material/styles";
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

const useThemeMode = () => {
    const { mode, setMode } = useColorScheme();

    const toggleTheme = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    return {
        mode,
        setMode,
        toggleTheme,
    };
};

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

export { useThemeMode };
export default MUIProvider;