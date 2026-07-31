import { DataGrid } from "@mui/x-data-grid";
import Button from "../button/Button";
import Form from "../../pages/form/Form.jsx"
import { useNavigate } from "react-router-dom";
import { AddRounded, DeleteOutlined, Edit} from "@mui/icons-material";
import { IconButton,Box,Stack,Container,Paper,Fab } from "@mui/material";
import { useState } from "react";


const rows=[
    {id:1,name:"Lee",email:"abc@123gmai.com",action:""}

]
export default function Table(){
    const columns = [
  { field: "id", headerName: "ID", width: 90,flex:0.5 },
  { field: "name", headerName: "NAME", width: 180, editable: true,flex:1 },
  { field: "email", headerName: "EMAIL", width: 180,flex:1 },
  {
    field: "action",
    headerName: "ACTION",
    width: 180,
    flex:1,
    renderCell: (params) => (
      <Stack direction={"column"} >
      <Box sx={{ display: "flex", alignItems:"center", justifyContent:"center",m:1 }}>
        <IconButton color="error"
          text="Edit"
          onClick={() => handleEdit(params.row) } sx={{mx:2}}
        >
        <DeleteOutlined />
        </IconButton >

        <IconButton color="primary"
          text="Edit"
          onClick={() => handleEdit(params.row)}
        ><Edit />
        </IconButton>
      </Box>
      </Stack>
    ),
  },
];
    const navigate = useNavigate();
return(<>
<Container>
  <Fab
    color="primary"
    sx={{
      position: "fixed",
      bottom: 16,
      right: 20,
      zIndex: 1000,
    }}
    onClick={() => navigate("form")}
  >
    <AddRounded fontSize="medium"/>
  </Fab>

  <Paper sx={{ height: 500, width: "100%", borderRadius: 3 }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      disableRowSelectionOnClick
      sx={{
        border: 0,
        borderRadius: 3,
        height: "100%",
      }}
    />
  </Paper>
</Container>
</>);    
}