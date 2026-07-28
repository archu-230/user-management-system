import Profile from "../pages/Profile";
import MainLayout from "../components/layouts";
import ProfileEdit from "../components/profile-edit";
export const router=[
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path:"profile/edit",
                element:<ProfileEdit/>
            },
            
        ],
    }
]