import {
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function ProfileEdit() {
  return (
    <Box
      sx={{    
        p: { xs: 2, md: 1 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 700,
          borderRadius: 3,
          p: { xs: 3, md: 4 },
        }}
      >
        <Stack spacing={4}>
          {/* Header */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
           
          >
            <Avatar
              sx={{
                width: 72,
                height: 72,
                fontSize: 30,
              }}
            >
              <PersonOutlineOutlinedIcon fontSize="large" />
            </Avatar>

            <Box>
              <Typography variant="h5" fontWeight={600}>
                Edit Profile
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Update your personal information below.
              </Typography>
            </Box>
          </Stack>

          {/* Form */}
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Full Name"
              placeholder="Enter your full name"
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              placeholder="Enter your email"
            />

            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
            />

            <TextField
              fullWidth
              label="Role"
              placeholder="Software Developer"
            />
          </Stack>

          {/* Actions */}
          <Stack
            direction="row"
            spacing={2}
          >
            <Button variant="outlined">
              Cancel
            </Button>

            <Button
              variant="contained"
              startIcon={<SaveOutlinedIcon />}
            >
              Save Changes
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}