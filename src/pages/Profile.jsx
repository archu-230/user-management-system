import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function Profile() {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 700,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Stack spacing={3}>
          {/* Header */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center" }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                fontSize: 32,
              }}
            >
              U
            </Avatar>

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" fontWeight={600}>
                User Name
              </Typography>

              <Typography color="text.secondary">
                user@example.com
              </Typography>
            </Box>

            <Button
              variant="outlined"
              startIcon={<EditOutlinedIcon />}
            >
              Edit
            </Button>
          </Stack>

          <Divider />

          {/* Information */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>

            <Stack spacing={2}>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Full Name
                </Typography>

                <Typography>User Name</Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Email
                </Typography>

                <Typography>user@example.com</Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Role
                </Typography>

                <Typography>Software Developer</Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Joined
                </Typography>

                <Typography>July 2026</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}