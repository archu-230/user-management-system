
import { Breadcrumbs, Toolbar } from "@mui/material";
import { useState } from "react";
import MUIProvider from "./providers/MUI";
import AppDrawer from "./components/app-drawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Bar from "./components/navbar"
import breadcrumbConfig from "./components/app-breadcrumb/config";
import AppBreadcrumb from "./components/app-breadcrumb";
import AppRouter from "./routes";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>

        <Bar onClickMenu={() => setOpen(prev => !prev)} />
        <Toolbar />
        <AppDrawer open={open} />
        <AppBreadcrumb />
        <AppRouter/>
      </MUIProvider>
    </BrowserRouter>
  );
}


export default App;