import MUIProvider from "./providers/MUI";
import Header from "./components/Navbar";

const App = () => {
  return (
    <MUIProvider>
      <Header />
    </MUIProvider>
  );
};

export default App;