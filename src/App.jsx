
import { Breadcrumbs, Toolbar } from "@mui/material";
import { useState } from "react";
import MUIProvider from "./providers/MUI";
import AppBoard from "./components/app-board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Bar from "./components/navbar"
import breadcrumbConfig from "./components/app-breadcrumb/config";
import AppBreadcrumb from "./components/app-breadcrumb";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>

        <Bar onclickMenu={() => setOpen(prev => !prev)} />
        <Toolbar />
        <AppBoard open={open} />
        <AppBreadcrumb />
         <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<></>} />
        </Routes>
      </MUIProvider>
    </BrowserRouter>
  );
}


export default App;