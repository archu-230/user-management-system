
import { Drawer, Toolbar, List } from "@mui/material";
import { navigation } from "./config";
import DrawerItem from "./DrawerItem";



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
    >
      <Toolbar />

      <List disablePadding>
        {navigation.map((item) => (
          <DrawerItem
            key={item.id}
            item={item}
          />
        ))}
      </List>
    </Drawer>
  );
}