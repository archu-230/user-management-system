import { RouterProvider } from "react-router-dom";
import MUIProvider from "./providers/MUI";
import router from "./routes";

const App = () => {

  return (
    <MUIProvider>
      <RouterProvider router={ router } />
    </MUIProvider>
  );
};

export default App;