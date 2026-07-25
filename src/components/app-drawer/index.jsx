import { Drawer, Typography } from "@mui/material";

export default function AppDrawer({ open }) {

  return (

    <Drawer
      open={open}
      variant="persistent"
      slotProps={{
        paper: {
          sx: {
            width: 230,
            boxSizing: "border-box",
          },
        },
      }}
    />

  );
}