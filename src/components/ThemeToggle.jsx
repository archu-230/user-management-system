import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggleButton = () => {
  const { mode, setMode } = useColorScheme();

  const handleToggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <IconButton
      onClick={ handleToggleTheme }
      color="inherit"
      disableRipple
      sx={ {
        p: 1,
        m: 1,
        borderRadius: "50%",
      } }
    >
      { mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
    </IconButton>
  );
};

export default ThemeToggleButton;