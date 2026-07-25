  
import { Toolbar } from "@mui/material";
import { useState } from "react";
import MUIProvider from "./providers/MUI";
import AppBoard from "./components/app-board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Bar from "./components/navbar"

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>
         <Bar onclickMenu={()=>setOpen(prev=>!prev)}/>
        <Toolbar />
        <AppBoard open={open} />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<></>}/>
          </Routes>
      </MUIProvider>
    </BrowserRouter>
  );
}


export default App;