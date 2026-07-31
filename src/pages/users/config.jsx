import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

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
    flex:1,
    align:"center",
    headerAlign:"center"
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
    sortable: false,
    filterable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <>
        <IconButton
          color="primary"
          onClick={() => console.log("Edit", params.row)}
        >
          <EditIcon />
        </IconButton>

        <IconButton
          color="error"
          onClick={() => console.log("Delete", params.row)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];
