import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/LoginForm"
import MainLayout from "../layouts/Main";
import Profile from "../pages/Profile";
import EditUser from "../pages/Edit-User";
import Table from "../components/table/Table";
import Form from "../pages/form/Form"
const routes = [
    {
        path: "/",
        element:<MainLayout />,
        children: [
            {
                index: true,
                path:"/",
                element: <></>,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "profile/edit",
                element: <EditUser />
            },
            {
                path:"t",
                element:<Table />,
            },
            {
                path:"t/form",
                element:<Form />
            }

        ],
    },
];

const router = createBrowserRouter(routes);

export default router;