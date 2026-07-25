import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Link as RouterLink, useLocation } from "react-router-dom";

import breadcrumbConfig from "../config/breadcrumbConfig";

const AppBreadcrumb = () => {
    const { pathname } = useLocation();

    const currentBreadcrumb = breadcrumbConfig.find(
        (item) => item.path === pathname
    );

    return (
        <Breadcrumbs
            separator={<ChevronRightIcon fontSize="small" />}
            sx={{ p: 2 }}
        >
            <Link
                component={RouterLink}
                underline="hover"
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