import { Drawer } from "@mui/material";



export default function AppBoard({ open }) {
  return (
    <Drawer
      open={open}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: 140, sm: 200 },
          top: { xs: 48, sm: 48 },
          height: {
            xs: "calc(100% - 48px)",
            sm: "calc(100% - 48px)",
          },
          boxSizing: "border-box",
        },
      }}
    />
  );
}