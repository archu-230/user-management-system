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
            width: { xs: 140, sm: 200 },
            top: 55,
            height: "calc(100% - 55px)",
          },
        },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          mt: 2,
          mb: 3,
          ml: 0,
          fontWeight: 200,
          fontSize: 30
        }}
      >
        <Button
          onClick={() => navigate("/")}
          variant="text">Home</Button>
      </Typography>
    </Drawer>
  );
}