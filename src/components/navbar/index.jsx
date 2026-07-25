import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Theme from "../button/ThemeButton";
import { ThemeContext } from "@emotion/react";
import ThemeToggleButton from "../ThemeToggle";
function Bar({onclickMenu}) {

  return (
   <AppBar
      position="fixed"
      color="secondary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar variant="dense">

        <IconButton onClick={onclickMenu}
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
        <ThemeToggleButton/>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;