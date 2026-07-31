import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { HOME, USERS } from "../../constants/route";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

export const navigation = [
    {
        id: "home",
        title: "Home",
        icon: <HomeOutlinedIcon />,
        path: HOME.ROOT,
        role:["USER"],
        children: [
            {
                id: "users",
                title: "Users",
                icon: <GroupsOutlinedIcon />,
                path: USERS.ROOT,
                role:["USER"]
            },
            
        ]
    },
    
]