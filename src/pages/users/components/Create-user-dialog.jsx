import { useState, useRef } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
  Stack,
  Typography,
  Avatar
} from "@mui/material";

import { userSchema } from "../../../libs/schemas/user.schema";
import { CloudUpload, Image } from "@mui/icons-material";
import user from "../../../assets/user.png";
export default function CreateUserDialog({ open, onClose, onSave }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    file: null,
  });
  const fileInputRef = useRef(null);
  
  const [preview,setPreview] =useState();
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClose = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      file: null,
    });
setPreview(null);
    setErrors({
      name: "",
      email: "",
      password: "",
    });

    onClose();
  };

  const handleChange = (event) => {
  const { name, value, files } = event.target;

  const inputValue = files ? files[0] : value;

  setUserData((prev) => ({
    ...prev,
    [name]: inputValue,
  }));

  // If a file was selected, create a preview
  if (name === "file" && files?.[0]) {
    setPreview(URL.createObjectURL(files[0]));
    return;
  }

  const result = userSchema.shape[name].safeParse(value);

  setErrors((prev) => ({
    ...prev,
    [name]: result.success ? "" : result.error.issues[0].message,
  }));
};

  const handleSave = () => {
    const result = userSchema.safeParse(userData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        name: fieldErrors.name?.[0] || "",
        email: fieldErrors.email?.[0] || "",
        password: fieldErrors.password?.[0] || "",
      });

      return;
    }

    onSave(userData);

    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      disableRestoreFocus
      slotProps={{
        transition: {
          onExited: () => {
            document.getElementById("new-user-btn")?.focus();
          },
        },
      }}
    >
      <DialogTitle>Add User</DialogTitle>

      <DialogContent>
        {/* <Box sx={{justifyContent:"center",display:"flex",alignItems:"center"}}> */}
        {/* <Button  sx={{borderRadius:10}}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<Image />}
        >
          Upload Image
          <input
          name="file"
            type="file"
            hidden
            onChange={handleChange}
          />
        </Button> */}
        <Stack
          spacing={0}
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => fileInputRef.current.click()}>
            <Box
              component={"img"}
              src={preview||user}
              alt="image"
              sx={{
                fontSize: 13,
                width: 100,
                height: 100,
                borderRadius: 12,
                boxShadow: 10,
                objectFit: "cover",
                objectPosition: "center",
                textAlign: "center",
                display: "flex",
              }}
            />
          </IconButton>
        </Stack>
        <input
          ref={fileInputRef}
          name="file"
          type="file"
          hidden
          onChange={handleChange}
        />
        {/* </Box> */}
        <TextField
          fullWidth
          autoFocus
          margin="normal"
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>

        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
