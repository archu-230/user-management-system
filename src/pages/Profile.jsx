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
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 700,
          p: { xs: 2, sm: 4 },
          borderRadius: { xs: 2, sm: 3 },
        }}
      >
        <Stack spacing={3}>
          {/* Header */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: { xs: "flex-start", sm: "center" } }}
          >
            <Avatar
              sx={{
                width: { xs: 64, sm: 80 },
                height: { xs: 64, sm: 80 },
                fontSize: { xs: 26, sm: 32 },
              }}
            >
              U
            </Avatar>

            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography variant="h5" fontWeight={600} sx={{ fontSize: { xs: 20, sm: 24 } }}>
                User Name
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  wordBreak: "break-word",
                  fontSize: { xs: 14, sm: 16 },
                }}
              >
                user@example.com
              </Typography>
            </Box>

            <Button
              variant="outlined"
              startIcon={<EditOutlinedIcon />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
              onClick={() => navigate("/profile/edit")}
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