import { AppBar as MuiAppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Menu, PermIdentityTwoTone } from "@mui/icons-material";
import ThemeToggleButton from "../ThemeToggle";
import { useNavigate } from "react-router-dom";


<<<<<<< HEAD:src/components/navbar/index.jsx
function Bar({ onClickMenu }) {
=======
function AppBar({ onclickMenu }) {
>>>>>>> origin/refac/appbar:src/components/app-bar/index.jsx
  const navigate = useNavigate();
  return (
    <MuiAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderRadius: 1 }}
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
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "start" }}>
          UMS
        </Typography>
        <ThemeToggleButton />
        <IconButton color="inherit" onClick={() => navigate("/profile")}>
          <PermIdentityTwoTone />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
