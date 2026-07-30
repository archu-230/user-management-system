// UserPage.jsx
import { useState } from "react";
import { Box } from "@mui/material";
import UserForm from "./UserForm";
import CustomDataGrid from "./DataGrid"; // Path to your DataGrid component

export default function UserPage() {
  // 1. Manage state here so both components can access it
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" }, // Optional initial data
  ]);

  // 2. Define DataGrid columns
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 180 },
    { field: "email", headerName: "Email", width: 220 },
  ];

  // 3. Handler passed to UserForm's onSubmit prop
  const handleAddUser = (user) => {
    const newUser = {
      id: Date.now(), // Generate a unique ID (MUI DataGrid requires 'id')
      ...user,
    };
    
    // Add the new user to the rows array
    setRows((prevRows) => [...prevRows, newUser]);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Form receives the submit handler */}
      <UserForm onSubmit={handleAddUser} />

      {/* DataGrid receives state rows and columns */}
      <CustomDataGrid rows={rows} columns={columns} checkbox={true} />
    </Box>
  );
}