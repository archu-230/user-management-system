import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EditIcon from "@mui/icons-material/Edit";

export const navigation = [
    {
        id: "profile",
        title: "Profile",
        icon: <AccountCircleOutlinedIcon />,
        path: "/profile",
        children: [
            {
                id: "edit-profile",
                title: "Edit Profile",
                icon: <EditIcon />,
                path: "/profile/edit",
            },
            
        ]
    },
    
]