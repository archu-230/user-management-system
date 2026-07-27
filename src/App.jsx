import { Toolbar } from "@mui/material";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";
import Bar from "./components/navbar"
import MUIProvider from "./providers/MUI";
import AppBoard from "./components/app-board";
import AppBreadcrumb from "./components/app-breadcrumbs";


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