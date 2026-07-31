import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";
import userImage from "../../assets/user.png";
// import DataGrid from "../../components/data-grid";
import { columns } from "./config";
import CreateUserDialog from "./components/Create-user-dialog";
import DataTable from "../../components/data-table/index";
export default function Users() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddUser = (user) => {
    const newUser = {
      id: rows.length + 1,
      name: user.name,
      email: user.email,
      profile: user.preview,
      file: user.file

    };

    setRows((prev) => [...prev, newUser]);
  };

  return (
    <Box
      sx={{
        mt: 0.5,
        p: 2,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 2,
        }}
      >
        <Button
          id="new-user-btn"
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
          onClick={handleOpen}
        >
          New
        </Button>

        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ textTransform: "none" }}
          disabled
        >
          Delete
        </Button>
      </Box>

      <DataTable rows={rows} columns={columns} />

      <CreateUserDialog
        open={open}
        onClose={handleClose}
        onSave={handleAddUser}
      />
    </Box>
  );
}