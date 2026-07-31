import { RouterProvider } from "react-router-dom";
import MUIProvider from "./providers/MUI";
import router from "./routes";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";


const App = () => {

  return (
    <MUIProvider>
      <RouterProvider router={router} />
    </MUIProvider>
  );
};

export default App;