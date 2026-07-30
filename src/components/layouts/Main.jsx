import { useState } from "react";
import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";

import AppBar from "../app-bar";
import AppDrawer from "../app-drawer";
import AppBreadcrumb from "../app-breadcrumbs";

import MainContainer from "../MainContainer";

const MainLayout = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar onClickMenu={() => setOpen(!open)} />

            <AppDrawer open={open} />

            <MainContainer open={open}>

                <AppBreadcrumb open={open} />

                <Box sx={{ p: 1 }}>
                    <Outlet />
                </Box>

            </MainContainer>

        </>
    );
};

export default MainLayout;