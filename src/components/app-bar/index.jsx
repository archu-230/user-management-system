import { AppBar as MuiAppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Menu } from "@mui/icons-material";
import ThemeToggleButton from "../ThemeToggle";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function AppBar({ onClickMenu }) {
  const navigate = useNavigate();
  return (
    <MuiAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: 64, }}
    >
      <Toolbar sx={{ height: 64, }}>
        <IconButton
          onClick={onClickMenu}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "start" , fontWeight:600}}>
          UMS
        </Typography>
        <ThemeToggleButton />
        <IconButton color="inherit" onClick={() => navigate("/profile")}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
