import { useColorScheme } from "@mui/material/styles";

const useThemeMode = () => {
    const { mode, systemMode, setMode } = useColorScheme();

    const resolvedMode = mode === "system" ? systemMode : mode;

    const toggleTheme = () => {
        setMode(resolvedMode === "dark" ? "light" : "dark");
    };

    return {
        mode: resolvedMode,
        setMode,
        toggleTheme,
    };
};

export default useThemeMode;