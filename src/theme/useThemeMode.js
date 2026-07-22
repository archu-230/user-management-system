import { useColorScheme } from "@mui/material/styles";

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

export default useThemeMode;