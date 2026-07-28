import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const defaultDrawerWidth = 250;

export default function AppDrawer({ open }) {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(true);

  return (
    <Drawer
      variant="persistent"
      open={open}
      slotProps={{
        paper: {
          sx: {
            width: defaultDrawerWidth,
            boxSizing: "border-box",
            borderRight: 1,
            borderColor: "divider",
          },
        },
      }}
    >
      <Toolbar variant="dense" />

      <Box sx={{ p: 1 }}>
        <List dense disablePadding>
          {/* Parent */}
          <ListItemButton
            onClick={() => setProfileOpen((prev) => !prev)}
            sx={{
              borderRadius: 1,
              minHeight: 42,
              px: 1,
            }}
          >
            {profileOpen ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}

            <ListItemIcon sx={{ minWidth: 34, ml: 1 }}>
              <PersonIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText
              primary="Profile"
              slotProps={{
                primary: {
                  sx:{
                    fontSize:15,
                    fontWeight: 500,
                  }
                },
              }}
            />
          </ListItemButton>

          {/* Children */}
          <Collapse in={profileOpen} timeout="auto" unmountOnExit>
            <List disablePadding>


              <ListItemButton
                onClick={() => navigate("/profile/edit")}
                sx={{
                  pl: 5.5,
                  py: 0.0,
                  borderRadius: 1,
                }}
              >
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Edit Profile"
                  slotProps={{
                    primary:{
                      sx:{
                        fontSize:14,
                        fontWeight: 500,
                      }
                    }
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
}