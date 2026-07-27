import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";

import config from "./config";

const AppBreadcrumb = () => {
    const { pathname } = useLocation();

    const currentBreadcrumb = config.breadcrumbs.find((item) =>
        matchPath({ path: item.path, end: true }, pathname)
    );

    return (
        <Breadcrumbs
            separator={<ChevronRightIcon fontSize="small" />}
            sx={{ p: 2 }} >
            <Link
                component={RouterLink}
                underline="none"
                color="inherit"
                to="/"
            >
                Home
            </Link>

            {currentBreadcrumb && pathname !== "/" && (
                <Typography color="text.primary">
                    {currentBreadcrumb.label}
                </Typography>
            )}
        </Breadcrumbs>
    );
};

export default AppBreadcrumb;