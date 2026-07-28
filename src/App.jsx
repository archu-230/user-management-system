import { Toolbar } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import MUIProvider from "./providers/MUI";
import AppDrawer from "./components/app-drawer";
import AppBar from "./components/app-bar";
import AppBreadcrumb from "./components/app-breadcrumbs";
import routes from "./routes";
import AppRouter from "./routes";

const App = () => {

  const [open, setOpen] = useState(false);

  return (
      <MUIProvider>
       <AppRouter/>
      </MUIProvider>
  );
}

export default App;