import { Drawer, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function AppBoard({open}) {
  
  
  return (
    
    <Drawer
      open={open}
      variant="persistent"
      slotProps={{
        paper: {
          sx: {
            width:{ xs: 140, sm: 200 },
            top: { xs: 48, sm: 55 },
            height: { xs: "calc(100% - 48px)", sm: "calc(100% - 55px)" },
          },
        },
      }}
    >
     
    </Drawer>
  );
}