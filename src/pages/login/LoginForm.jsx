import { Container, TextField, Stack, Box } from "@mui/material";
import Button from "../../components/button/Button.jsx";
import God from "../../assets/god.jpg";
import MainLayout from "../../layouts/Main.jsx";
export default function loginForm() {
  const defaultWidth = 200;
  return (
    <>
      <Box sx={{ backgroundColor: "bisque", p: 2, m: 1,borderRadius:2}}>
        <Stack direction="row">
          <Container
            maxWidth="xs"
            sx={{
              background: "gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // width:300,
              minHeight: "90vh",
              // border:3,
              borderRadius: 4,
              mx: 2,
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              sx={{
                m: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Username" variant="outlined"
                sx={{ width: defaultWidth, border: 2, borderRadius: 1 }}
              />

              <TextField
                label="Password" variant="outlined"
                sx={{ width: defaultWidth, border: 2, borderRadius: 1 }}
              />

              <Button text="login" onClick={()=><MainLayout />}/>
            </Stack>
          </Container>

          <Box component={"img"} src={God} alt="Banner style" sx={{width:800,height:570,borderRadius:2,boxShadow:5,objectFit:"cover",objectPosition:"center"}}/>

        </Stack>
      </Box>
    </>
  );
}
