import { Box } from "@mui/material";

const MainContent = ({ open, children }) => {
    return (
        <Box
            component="main"
            sx={{
                minHeight: "100vh",
                pt: 8,
                ml: open ? "260px" : 0,

                width: open
                    ? "calc(100% - 260px)"
                    : "100%",

                transition: "margin-left 0.3s ease, width 0.3s ease",
            }}
        >
            {children}
        </Box>
    );
};

export default MainContent;