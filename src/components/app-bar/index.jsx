import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import ThemeToggleButton from "../ThemeToggle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left side menu icon */}
        <IconButton edge="start" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

       
        <Box sx={{ flexGrow: 1 }} />

        {/* Right side profile icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ThemeToggleButton />

          <IconButton onClick={()=>navigate("/profile")}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;