import { Button, createTheme, CssBaseline, ThemeProvider,Box } from "@mui/material";
import { useState } from "react";

function ThemeSwitcher(){

    const [mode,setMode] =useState("light");
const theme =createTheme({
    palette:{
        mode:mode,
    },
});
    
return(

<ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems: "center",
            height:"100vh",
        }}>
        <Button variant="contained" onClick={()=>setMode(mode==="light"?"dark":"light")}>Switch Theme</Button>
        </Box>
        </ThemeProvider>

)

}
export default ThemeSwitcher;