import { Box, Breadcrumbs, Divider, Link, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";

import config from "./config";

export default function AppBreadcrumb() {
  const { pathname } = useLocation();

  const currentBreadcrumb = config.breadcrumbs.find((item) =>
    matchPath({ path: item.path, end: true }, pathname)
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Breadcrumbs
        separator={<ChevronRightIcon fontSize="small" />}
        sx={{ py: 1,mt:1,ml:1 }}
      >
        <Link
          component={RouterLink}
          underline="hover"
          color="inherit"
          to="/"
        >
          🏠 Home
        </Link>

        {currentBreadcrumb && pathname !== "/" && (
          <Typography color="text.primary">
            {currentBreadcrumb.label}
          </Typography>
        )}
      </Breadcrumbs>

      <Divider sx={{ width: "100%" }} />
    </Box>
  );
}