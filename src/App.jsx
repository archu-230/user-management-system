import { Box } from "@mui/material";
import Bar from "./components/navbar/NavBar";
import { useState } from "react";

function App() {
  const [open,setOpen]=useState(false);
  
  return (
    
    <>
    <Bar onclickMenu={()=>setOpen(prev=>!prev)}/>
  
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
    </Box>
    </>
    
  );
}

export default App;