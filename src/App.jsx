import { Toolbar } from "@mui/material";
import { useState } from "react";
import MUIProvider from "./providers/MUI";
import Header from "./components/Navbar";
import AppBoard from "./components/AppBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Layout from "./layouts/MainLayout";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>
        <Layout isOpen={isOpen}>
          <Header onMenuClick={() => setIsOpen((prev) => !prev)} />
        <Toolbar />
        <AppBoard isOpen={isOpen} setIsOpen={setIsOpen} />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<></>}/>
          </Routes>
        </Layout>
      </MUIProvider>
    </BrowserRouter>
  );
};

export default App;