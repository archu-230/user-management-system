import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Box, Toolbar } from "@mui/material";

import AppBar from "../components/app-bar";
import AppDrawer from "../components/app-drawer";
import AppBreadcrumb from "../components/app-breadcrumbs";
import LAYOUT from "../constants/layout";

const MainLayout = () => {

    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>

            <AppBar
                onClickMenu={() => setOpen(!open)}
            />

            <AppDrawer
                open={open}
                setOpen={setOpen}
                drawerWidth={LAYOUT.DRAWER_WIDTH}
            />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    ml: open ? `${LAYOUT.DRAWER_WIDTH}px` : 0,
                    transition: "0.3s",
                    width: open
                        ? `calc(100% - ${LAYOUT.DRAWER_WIDTH}px)`
                        : "100%",
                }}
            >

                <Toolbar
                    sx={{
                        minHeight: {
                            xs: 56,
                            sm: 64,
                        },
                    }}
                />

                <Box
                    sx={{
                        position: "sticky",
                        top: LAYOUT.APP_BAR_HEIGHT,
                        zIndex: 10,
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "background.paper",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <AppBreadcrumb />
                </Box>

                <Box
                    sx={{
                        p: 1,
                    }}
                >
                    <Outlet />
                </Box>

            </Box>

        </Box>
    );
};

export default MainLayout;