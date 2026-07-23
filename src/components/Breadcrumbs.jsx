import { Breadcrumbs as MUIBreadcrumbs, Typography, Link, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ items = [] }) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ mt: 8, px: 3, py: 2 }}>
            <MUIBreadcrumbs
                separator={<ChevronRightIcon fontSize="small" />}
                aria-label="Breadcrumb"
            >
                {items.map((item, index) =>
                    index === items.length - 1 ? (
                        <Typography key={item.label}>
                            {item.label}
                        </Typography>
                    ) : (
                        <Link
                            key={item.label}
                            underline="none"
                            color="inherit"
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate(item.path)}
                        >
                            {item.label}
                        </Link>
                    )
                )}
            </MUIBreadcrumbs>
        </Box>
    );
};

export default Breadcrumbs;