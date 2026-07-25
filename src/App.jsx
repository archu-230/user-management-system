import { Box } from "@mui/material";
import Bar from "./components/navbar/NavBar";
import { useState } from "react";
import MUIProvider from "./providers/MUI";

function App() {
  const [open,setOpen]=useState(false);
  
  return (
   
     <MUIProvider>
    <Bar onclickMenu={()=>setOpen(prev=>!prev)}/>
  
  
 </MUIProvider>
   
    
  );
}


export default App;