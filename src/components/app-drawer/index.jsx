import { Drawer } from "@mui/material";

export default function AppDrawer({ open }) {

  return (

    <Drawer
      open={open}
      variant="persistent"
      slotProps={{
        paper: {
          sx: {
            width: 260,
            boxSizing: "border-box",
          },
        },
      }}
    />

  );
}