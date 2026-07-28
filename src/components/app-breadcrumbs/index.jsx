import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";

import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";

import config from "./config";

const AppBreadcrumb = () => {

    const { pathname } = useLocation();

    const currentBreadcrumbs = config.breadcrumbs
        .filter((item) =>
            matchPath({ path: item.path, end: false }, pathname)
        );

    return (
        <Breadcrumbs
            separator={<ChevronRightIcon fontSize="small" />} sx={{ p: 2 }} >

            <Link
                component={RouterLink}
                to="/" underline="none"
                color="inherit"
                sx={{ display: "flex", alignItems: "center", }} >
                <HomeIcon fontSize="small" />

            </Link> {currentBreadcrumbs
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
    );
};
export default AppBreadcrumb;