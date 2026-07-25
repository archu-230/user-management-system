import { Button, createTheme, CssBaseline, ThemeProvider,Box } from "@mui/material";
import { useState,useMemo } from "react";

export default function ThemeSwitcher(){
    const [mode,setMode] = useState(localStorage.getItem("theme")||"ligh");
    const toggleTheme = ()=>{
        const newMode = mode ==="light"?"dark":"light";
        setMode(newMode);
        localStorage.setItem("theme",newMode)
    };
    return {mode,toggleTheme};
}
