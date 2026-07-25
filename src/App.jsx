import { Toolbar } from "@mui/material";
import { useState } from "react";
import MUIProvider from "./providers/MUI";
import AppBar from "./components/app-bar";
import AppBoard from "./components/app-board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>
          <AppBar/>
        <Toolbar />
        <AppBoard open={open} />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<></>}/>
          </Routes>
      </MUIProvider>
    </BrowserRouter>
  );
};

export default App;