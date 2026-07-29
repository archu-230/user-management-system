import { CheckBox } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid as DGrid } from "@mui/x-data-grid";


export default function DataGrid({rows,columns,checkbox}) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DGrid
        rows={rows}
        columns={columns}
        checkboxSelection={checkbox}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        
      />
    </Box>
  );
}