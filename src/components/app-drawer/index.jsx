import { Drawer, Toolbar } from "@mui/material";
import { navigation } from "./config";
import DrawerItem from "./DrawerItem";
import { SimpleTreeView } from "@mui/x-tree-view";

export default function AppDrawer({ open }) {

  const getDefaultExpandedItems = (items) => {
    return items
      .filter((item) => item.children?.length)
      .map((item) => item.id);
  };

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
      <SimpleTreeView
        defaultExpandedItems={getDefaultExpandedItems(navigation)}>
        {navigation.map((item) => (
          <DrawerItem
            key={item.id}
            item={item}
          />
        ))}
      </SimpleTreeView>

    </Drawer>
  );
}