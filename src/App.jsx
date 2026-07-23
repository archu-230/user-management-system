import { BrowserRouter } from "react-router-dom";
import MUIProvider from "./providers/MUI";
import AppBar from "./components/AppBar";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <BrowserRouter>
      <MUIProvider>
        <AppBar />
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Products", path: "/products" },
            { label: "Items", path: "/items" }
          ]}
        />
      </MUIProvider>
    </BrowserRouter>
  );
};

export default App;