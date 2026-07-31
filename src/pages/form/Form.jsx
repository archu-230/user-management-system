import { Stack, Dialog, DialogTitle, DialogContent, DialogActions,Box } from "@mui/material";
import { useState } from "react";
import TextField from "../../components/textfiled/TextField";
import Button from "../../components/button/Button";

export default function Form({ open, onClose, onSubmit }) {
  const [rows, setRows] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(rows);
    }

    console.log("Submitted Data:", rows);

    setRows({
      name: "",
      email: "",
      password: "",
    });

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Add User</DialogTitle>
{/* <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}> */}

      <DialogContent>
        <Stack direction={"column"} spacing={2} sx={{ mt: 1 ,display:"flex",justifyContent:"center",alignItems:"center"}}>
          <TextField 
            label="Enter your name"
            value={rows.name}
            onChange={(e) =>
              setRows({
                ...rows,
                name: e.target.value,
              })
            }
          />

          <TextField
            label="Enter your mail"
            value={rows.email}
            onChange={(e) =>
              setRows({
                ...rows,
                email: e.target.value,
              })
            }
          />

          <TextField
            type="password"
            label="Enter your password"
            value={rows.password}
            onChange={(e) =>
              setRows({
                ...rows,
                password: e.target.value,
              })
            }
          />
        </Stack>
      </DialogContent>

<Stack direction={"column"} spacing={2} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>

      <DialogActions>
        <Button
          text="Cancel"
          onClick={onClose}
        />

        <Button
          text="Submit"
          onClick={handleSubmit}
        />
      </DialogActions>
</Stack>

{/* </Box> */}

    </Dialog>
  );
}