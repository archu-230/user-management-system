import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/Main";
import Profile from "../pages/Profile";
import EditUser from "../pages/Edit-User";
const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <></>,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "profile/edit",
                element: <EditUser />
            }
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;