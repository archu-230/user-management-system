import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Menu, People } from "@mui/icons-material";
import { ThemeContext } from "@emotion/react";
import ThemeToggleButton from "../ThemeToggle";
import { useNavigate } from "react-router-dom";


function Bar({ onClickMenu }) {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderRadius: 2 }}
    >
      <Toolbar variant="dense">
        <IconButton
          onClick={onClickMenu}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          UMS
        </Typography>
        <ThemeToggleButton />
        <IconButton onClick={() => navigate("/profile")}>
          <People />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
