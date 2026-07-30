import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";
import DataGrid from "../../components/data-grid";
import { columns, rows } from "./config";

export default function Users() {
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

      <DataGrid rows={rows} columns={columns} checkbox={true}/>
    </Box>
  );
}