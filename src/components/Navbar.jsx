import { AppBar } from "@mui/material";
import ThemeToggleButton from "./ThemeToggle";

const Header = () => {
    return (
        <AppBar position="fixed" color="default">
            <ThemeToggleButton />
        </AppBar>
    );
};

export default Header;