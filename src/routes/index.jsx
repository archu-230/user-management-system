import { createBrowserRouter } from "react-router-dom";


import Profile from "../pages/Profile";
import EditUser from "../pages/Edit-User";
import Users from "../pages/users";
// import ProductList from "../pages/products";
import MainLayout from "../components/layouts/Main";
// import Form from "../pages/form/Form";

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
                path: "users",
                element: <Users />,

            },
            // {
            //     path: "products",
            //     element: <ProductList />
            // },
            // {
            //     path: "/add-user",
            //     element:<Form />,
            // }

        ],
    },
];

const router = createBrowserRouter(routes);

export default router;