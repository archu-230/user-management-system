import { AppBar as MuiAppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThemeToggle from "./ThemeToggle";

const AppBar = () => {
    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="h1"
                    sx={{
                        fontFamily: "Georgia, serif",
                        fontWeight: 700,
                        letterSpacing: 1,
                    }}
                >
                    UMS
                </Typography>

                <Box
                    sx={{
                        ml: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <ThemeToggle />

                    <IconButton color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBar;