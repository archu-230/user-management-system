import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";

import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";

import config from "./config";

const AppBreadcrumb = ({ open }) => {

    const { pathname } = useLocation();

    const currentBreadcrumbs = config.breadcrumbs
        .filter((item) =>
            matchPath(
                {
                    path: item.path,
                    end: false,
                },
                pathname
            )
        );

    return (
        <Box
            sx={{
                position: "fixed",
                top: 64,
                left: open ? "260px" : 0,
                width: open ? "calc(100% - 260px)" : "100%",
                height: 40,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                px: 2,
                bgcolor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
                transition: "left 0.3s ease, width 0.3s ease",
            }}
        >
            <Breadcrumbs
                separator={
                    <ChevronRightIcon fontSize="small" />
                }
            >
                <Link
                    component={RouterLink}
                    to="/"
                    underline="none"
                    color="inherit"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <HomeIcon fontSize="small" />
                </Link>

                {currentBreadcrumbs
                    .filter((item) => item.path !== "/")
                    .map((item) => (
                        <Link
                            key={item.path}
                            component={RouterLink}
                            to={item.path}
                            underline="none"
                            color="inherit"
                        >
                            {item.label}
                        </Link>
                    ))}
            </Breadcrumbs>
        </Box>
    );
};

export default AppBreadcrumb;