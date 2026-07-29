import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";

import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";

import config from "./config";

const AppBreadcrumb = () => {

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
                position: "sticky",
                top: 0,
                zIndex: 10,
                height: 25,
                display: "flex",
                alignItems: "center",
                backgroundColor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
                px: 2,
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