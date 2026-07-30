import { createBrowserRouter } from "react-router-dom";


import Profile from "../pages/Profile";
import EditUser from "../pages/Edit-User";
import Users from "../pages/users";
import ProductList from "../pages/products";
import MainLayout from "../components/layouts/Main";

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
            },
            {
                path: "users",
                element: <Users />,

            },
            {
                path: "products",
                element: <ProductList />
            },
            {
                path: "users/add-user",
                element: <>Implement Later</>
            }
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;