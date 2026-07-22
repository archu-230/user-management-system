import { Box } from "@mui/material";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ThemeButton />
    </Box>
  );
}

export default App;