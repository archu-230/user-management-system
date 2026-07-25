import { Toolbar } from "@mui/material";
import { useState } from "react";
import MUIProvider from "./providers/MUI";
import Header from "./components/app-bar";
import AppBoard from "./components/app-board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>
          <Header/>
        <Toolbar />
        <AppBoard isOpen={isOpen} setIsOpen={setIsOpen} />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<></>}/>
          </Routes>
      </MUIProvider>
    </BrowserRouter>
  );
};

export default App;