import { useState } from "react";
import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";

import AppBar from "../components/app-bar";
import AppDrawer from "../components/app-drawer";
import AppBreadcrumb from "../components/app-breadcrumbs";

import MainContent from "./components/MainContent";

const MainLayout = () => {

    const [open, setOpen] = useState(true);

    return (
        <>
            <AppBar onClickMenu={() => setOpen(!open)} />

            <AppDrawer open={open} />

            <MainContent open={open}>

                <AppBreadcrumb open={open} />

                <Box sx={{ p: 1 }}>
                    <Outlet />
                </Box>

            </MainContent>

        </>
    );
};

export default MainLayout;