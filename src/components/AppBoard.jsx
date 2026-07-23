import { Drawer, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const DRAWER_WIDTH = { xs: 140, sm: 200 };

export default function AppBoard({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  return (
    <Drawer
      open={isOpen}
      variant="persistent"
      slotProps={{
        paper: {
          sx: {
            width: DRAWER_WIDTH,
            top: { xs: 48, sm: 55 },
            height: { xs: "calc(100% - 48px)", sm: "calc(100% - 55px)" },
          },
        },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          mt: { xs: 1, sm: 2 },
          mb: { xs: 2, sm: 3 },
          ml: 0,
          fontSize: { xs: 20, sm: 30 },
        }}
      >
        <Button
          onClick={() => navigate("/")}
          variant="text"
          sx={{ fontSize: { xs: 14, sm: 18 }, minWidth: 0, px: { xs: 1, sm: 2 } }}
        >
          Home
        </Button>
      </Typography>
    </Drawer>
  );
}