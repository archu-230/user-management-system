import { AppBar, IconButton, Typography, } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "../context/ThemeContext";

const Header = () => {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <AppBar position="fixed" color="default" >
            <IconButton onClick={toggleTheme} color="inherit" disableRipple
                sx={{
                    p: 1, m: 1, borderRadius: "50%"
                }}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </AppBar>
    );
};

export default Header;