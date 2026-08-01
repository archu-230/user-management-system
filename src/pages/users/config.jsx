import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Avatar } from "@mui/material";
import user from "../../assets/user.png";
import BlockIcon from "@mui/icons-material/Block";

export const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
    align: "center",
    headerAlign: "center",
  },
  {
    field:"profile",
    headerName:"Profile",
    flex:0.3,
    align:"center",
    headerAlign:"center",
    justifyContent:"center",
    display:"flex",
    alignItems:"center",
    renderCell: (params)=>(<Avatar src={ params.value || user }/>),
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "actions",
    headerName: "Actions",
    width: 120,
    flex:1,
    sortable: false,
    filterable: false,
    align: "center",
    headerAlign: "center",
    renderCell: () => (
      <>
        <IconButton
          color="primary"
        >
          <EditIcon />
        </IconButton>

        <IconButton
          color="error"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="warning"
        >
          <BlockIcon />
        </IconButton>

      </>
    ),
  },
];
