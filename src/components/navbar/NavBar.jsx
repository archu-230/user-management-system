import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Theme from "../button/ThemeButton";
import { ThemeContext } from "@emotion/react";
import { useThemeContext } from "../../context/ThemeContext";
function Bar({onMenuClick}) {
const {mode,toggleTheme} = useThemeContext();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">

        <IconButton onClick={onMenuClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{flexGrow:1,textAlign:"center"}}>
          UMS
        </Typography>
        <Theme onClickIcon={toggleTheme}/>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;