import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import AppBar from "../app-bar";
import AppDrawer, { defaultDrawerWidth } from "../app-drawer";
import AppBreadcrumb from "../app-breadcrumbs";

export default function MainLayout() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <AppBar onClickMenu={() => setOpen((prev) => !prev)} />

            <AppDrawer open={open} />

            <Box
                component="main"
                sx={{
                    ml: open ? `${defaultDrawerWidth}px` : 0,
                    width: open ? `calc(100% - ${defaultDrawerWidth}px)` : "100%",
                    transition: "margin-left 300ms ease, width 300ms ease",
                }}
            >
                <Toolbar variant="dense" />


                <AppBreadcrumb />

                <Box sx={{ px: 2, pt: 2 }}>
                    <Outlet />
                </Box>

            </Box>
        </>
    );
}