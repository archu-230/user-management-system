import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile";

export const routes=[
    {
        path:"/",
        element:<></>,
    },
    {
        path:"/profile",
        element:<Profile />,
    }
];