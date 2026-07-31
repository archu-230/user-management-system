import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";
import DataGrid from "../../components/data-grid";
import { columns, rows } from "./config";
import Form from "../form/Form";

export default function Users() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data) => {
    console.log(data);
    // Add data to DataGrid here
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
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
          onClick={() => setOpen(true)}
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

      <DataGrid
        rows={rows}
        columns={columns}
        checkbox={true}
      />

      <Form
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}