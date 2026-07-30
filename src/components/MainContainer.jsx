import { Box } from "@mui/material";

const MainContainer = ({ open, children }) => {
    return (
        <Box
            component="main"
            sx={{
                minHeight: "100vh",
                pt: "104px",
                ml: open ? "260px" : 0,

                width: open
                    ? "calc(100% - 260px)"
                    : "100%",

                transition: "0.3s",
            }}
        >
            {children}
        </Box>
    );
};

export default MainContainer;