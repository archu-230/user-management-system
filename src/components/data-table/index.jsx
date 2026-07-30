import { CheckBox } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const initialState = {
  pagination: {
    paginationModel: {
      pageSize: 5,
    },
  },
};

const pageSizeOptions=[5,10,20];

export default function DataTable({ rows, columns, checkbox }) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={checkbox}
        pageSizeOptions={pageSizeOptions}
        initialState={initialState}
        disableRowSelectionOnClick
      />
    </Box>
  );
}