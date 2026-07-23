import { BrowserRouter } from "react-router-dom";
import MUIProvider from "./providers/MUI";
import Header from "./components/AppBar";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <BrowserRouter>
      <MUIProvider>
        <Header />
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