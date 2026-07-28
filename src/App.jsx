import { RouterProvider } from "react-router-dom";

import MUIProvider from "./providers/MUI";
import AppDrawer from "./components/app-drawer";
import AppBar from "./components/app-bar";
import AppBreadcrumb from "./components/app-breadcrumbs";
import routes from "./routes";
import AppRouter from "./routes";

const App = () => {

  return (
      <MUIProvider>
       <AppRouter/>
      </MUIProvider>
  );
};

export default App;