import MainLayout from "./layouts/MainLayout";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;