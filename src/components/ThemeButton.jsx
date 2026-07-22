import { Button } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext.jsx";

function ThemeButton() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Button
      variant="contained"
      onClick={toggleTheme}
    >
      {mode === "light"
        ? "Switch to Dark"
        : "Switch to Light"}
    </Button>
  );
}

export default ThemeButton;