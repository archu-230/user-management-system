import { Stack } from "@mui/material";
import { useState } from "react";
import TextField from "../../components/textfiled/TextField";
import Button from "../../components/button/Button";

export default function UserForm({ onSubmit }) {
  const [rows, setRows] = useState({
    name: "",
    email: "",
    password:"",
  });

  const handleSubmit = () => {
    // Pass the form data up to the parent component
    if (onSubmit) {
      onSubmit(rows);
    }
    console.log("Submitted Data:", rows);

    // Optional: Reset form fields after submission
    setRows({ name: "", email: "" });
  };

  return (
    <Stack spacing={2} sx={{ alignItems: "center", m: 2 }}>
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

<TextField type={"password"}
        label="Enter your password"
        value={rows.password}
        onChange={(e) =>
          setRows({
            ...rows,
            password: e.target.value,
          })
        }
      />
      <Button
        text="Submit"
        onClick={handleSubmit}
      />
    </Stack>
  );
}