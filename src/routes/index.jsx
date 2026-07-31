import { createBrowserRouter } from "react-router-dom";

import {HOME} from "../constants/route"
import Profile from "../pages/Profile";
import EditUser from "../pages/Edit-User";
import Users from "../pages/users";
import MainLayout from "../components/layouts/Main";
import {USERS} from "../constants/route"

const routes = [
    {
        path: HOME.ROOT,
        element: <MainLayout />,
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
                path: USERS.ROOT,
                element: <Users />,

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