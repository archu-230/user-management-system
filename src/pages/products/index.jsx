import { Box, Toolbar, Typography } from "@mui/material";
import DataGrid from "../../components/data-grid";
import { columns, rows } from "./config";

export default function ProductList() {
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
            <Typography variant="contained" sx={{
                display:"flex",
                justifyContent:"center",
                pt:4
            }}>Product List</Typography>
            <Toolbar />
            <DataGrid
                rows={rows}
                columns={columns}
                checkbox={false} />

        </Box>
    )
}