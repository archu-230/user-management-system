import { useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";

import { userSchema } from "../../libs/schemas/user.scheme";

export default function CreateUserDialog({
    open,
    onClose,
    onSave,
}) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

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
        });

        setErrors({
            name: "",
            email: "",
            password: "",
        });

        onClose();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));

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
                <Button onClick={handleClose}>
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSave}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}