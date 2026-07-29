import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import {
    ExpandLess,
    ExpandMore,
} from "@mui/icons-material";
export default function DrawerItem({ item, level = 0 }) {

    const location = useLocation();
    const [open, setOpen] = useState(true);
    const hasChildren = item.children && item.children.length > 0;
    const isSelected = item.path === location.pathname;

    const handleClick = () => {
        if (hasChildren) {
            setOpen((prev) => !prev);
        }
    };

    return (
        <>
            <ListItemButton
                component={!hasChildren ? Link : "div"}
                to={!hasChildren ? item.path : undefined}
                onClick={handleClick}
                selected={isSelected}
                sx={{
                    pl: 2 + level * 1,
                }}
            >
                <Box
                    sx={{
                        width: 24,
                        display: "flex",
                        justifyContent: "center",
                        mr: 1,
                    }}
                >
                    {hasChildren &&
                        (open ? <ExpandLess /> : <ExpandMore />)}
                </Box>

                {item.icon && (
                    <ListItemIcon
                        sx={{
                            minWidth: 30,
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                )}

                <ListItemText primary={item.title} sx={{
                    color:"#000",
                    fontWeight:700
                }}/>
            </ListItemButton>

            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {item.children.map((child) => (
                            <DrawerItem
                                key={child.id}
                                item={child}
                                level={level + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
}