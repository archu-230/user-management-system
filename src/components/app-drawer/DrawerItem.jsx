import { Link, useLocation } from "react-router-dom";
import { Box, ListItemIcon, ListItemText } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

export default function DrawerItem({ item }) {

  const location = useLocation();
  const isSelected = location.pathname === item.path;
  const hasChildren = Boolean(item.children?.length);

  return (
    <TreeItem
      sx={ {
        color: "text.primary",

        "& .MuiTreeItem-content": {
          minHeight: 36,
          height: 36,
          marginTop: 1,
        },

        "& .MuiTreeItem-content.Mui-selected": {
          backgroundColor: "action.selected",
        },

        "& .MuiTreeItem-content.Mui-selected:hover": {
          backgroundColor: "action.hover",
        },
      } }
      itemId={ item.id }
      label={
        <Box
          component={ !hasChildren ? Link : "div" }
          to={ !hasChildren ? item.path : undefined }
          sx={ {
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: 36,
            px: 1,
            borderRadius: 1,
            textDecoration: "none",
            color: "inherit",
          } }
        >
          { item.icon && (
            <ListItemIcon
              sx={ {
                minWidth: 36,
                color: "inherit",
              } }
            >
              { item.icon }
            </ListItemIcon>
          ) }

          <ListItemText
            primary={ item.title }
            slotProps={ {
              primary: {
                fontWeight: isSelected ? 700 : 500,
              },
            } }
          />
        </Box>
      }
    >
      { hasChildren &&
                item.children.map((child) => (
                  <DrawerItem
                    key={ child.id }
                    item={ child }
                  />
                )) }
    </TreeItem>
  );
}