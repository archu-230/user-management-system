import { Box } from "@mui/material";
import { DRAWER_WIDTH } from "../components/AppBoard";

export default function Layout({ children, isOpen }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        transition: (theme) =>
          theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ml: isOpen
          ? { xs: `${DRAWER_WIDTH.xs}px`, sm: `${DRAWER_WIDTH.sm}px` }
          : 0,
      }}
    >
      {children}
    </Box>
  );
}