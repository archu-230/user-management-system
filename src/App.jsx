import { Toolbar } from "@mui/material";

import { useState } from "react";
import MUIProvider from "./providers/MUI";
import AppDrawer from "./components/app-drawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/app-bar";
import { routes } from "./components/routes/routeConfig";
import AppBreadcrumb from "./components/app-breadcrumb";
import AppRouter from "./routes";

const App = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <MUIProvider>
        <AppBar onClickMenu={() => setOpen(prev => !prev)} />
        <Toolbar />
        <AppDrawer open={open} />
        <AppBreadcrumb />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </MUIProvider>
    </BrowserRouter>
  );
}
export default App;