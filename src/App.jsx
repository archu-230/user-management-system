import MUIProvider from "./provider/MUI";
import Header from "./components/Navbar";

const App = () => {
  return (
    <MUIProvider>
      <Header />
    </MUIProvider>
  );
};

export default App;