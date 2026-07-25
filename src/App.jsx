
import { Breadcrumbs, Toolbar } from "@mui/material";
import { useState } from "react";
import MUIProvider from "./providers/MUI";
import AppBoard from "./components/app-board";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/app-bar";
import { routes } from "./components/routes/routeConfig";
import AppBreadcrumb from "./components/app-breadcrumb";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>
        <AppBar onclickMenu={() => setOpen(prev => !prev)} />
        <Toolbar />
        <AppBoard open={open} />
        <AppBreadcrumb />
         <Routes>
          {routes.map((route)=>(<Route key={route.path} path={route.path} element={route.element}/>))}
        </Routes>
      </MUIProvider>
    </BrowserRouter>
  );
}


export default App;