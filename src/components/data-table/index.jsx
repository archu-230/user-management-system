import { CheckBox } from "@mui/icons-material";
import { Box, NoSsr } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";


const initialState = {
  pagination: {
    paginationModel: {
      pageSize: 5,
    },
  },
};

const pageSizeOptions = [5, 10, 20];

export default function DataTable({
  rows,
  columns,
  checkboxSelection,
  disableRowSelectionOnClick,
  showCellVerticalBorder,
  showColumnVerticalBorder,
  disableColumnMenu,
  columnHeaderHeight,
  rowHeight,
  pageSizeOptions,
  initialState,
  emptyRowsMessage,
  showToolbar,
  ...rest }) {
  
  
   const memorizedColumns=useMemo(()=>{
      return columns?.map((column)=>{
        const finalColumnDef={...column};
        if(!finalColumnDef.flex && !finalColumnDef.width){
          finalColumnDef.flex=1;
        }
        return finalColumnDef;
      });
   },[columns]);

   
  const memorizedProps = useMemo(() => ({
    columns: memorizedColumns ?? [],
    rows,
    showCellVerticalBorder: showCellVerticalBorder ?? true,
    showColumnVerticalBorder: showColumnVerticalBorder ?? true,
    disableRowSelectionOnClick: disableRowSelectionOnClick ?? true,
    disableColumnMenu: disableColumnMenu ?? true,
    checkboxSelection: checkboxSelection ?? true,
    columnHeaderHeight: columnHeaderHeight ?? 40,
    rowHeight: rowHeight ?? 40,
    pageSizeOptions: pageSizeOptions ?? [ 5, 10, 25, 50 ],
    showToolbar: showToolbar ?? true,
    initialState: initialState ?? {
      pagination: { paginationModel: { pageSize: 10 } },
    },
    slots: {
      noRowsOverlay: (() => (
        <Box
          sx={ {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' } }
        >
          { emptyRowsMessage ?? 'No Rows found' }
        </Box>
      )),
    },
    ...rest,
  }), [
    rest,
    memorizedColumns,
    rows,
    showCellVerticalBorder,
    showColumnVerticalBorder,
    disableColumnMenu,
    checkboxSelection,
    columnHeaderHeight,
    rowHeight,
    pageSizeOptions,
    initialState,
    emptyRowsMessage,
    disableRowSelectionOnClick,
    showToolbar,
  ]);

  return(
    <NoSsr>
      <Box sx={{
        minHeight:500,width:"100%"
      }}>
        <DataGrid {...memorizedProps}/>
      </Box>
    </NoSsr>
  );

}