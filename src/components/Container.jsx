import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
export const Contain =()=>{
    return (
    <>
    <Container maxWidth="sm" sx={{border:1,borderRadius:2,padding:3}}>  
    
       <Box sx={{padding:3,border:1,borderRadius:2,borderColor:"red",borderStyle:"solid"}}>
        
        <Typography variant="contained" sx={{justifyContent:"center",alignItems:"center"}}>Login</Typography><br/>
        <TextField label="username"></TextField>
        <TextField label="password"></TextField>
        
       <Stack direction="row" spacing={2} sx={{justifyContent:"space-evenly"}}>
        <Button variant="contained">Login</Button>
        <Button variant="contained">Login</Button>
        <Button variant="contained">Login</Button>


        </Stack>
        <Button>Login</Button>
        <Button>Login</Button>
        <Button>Login</Button>


        {/* <div>
            <h1>hello</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, inventore aspernatur, aliquid nisi quisquam eius alias praesentium officia optio cupiditate perferendis voluptatem quia illum harum aperiam necessitatibus eum officiis. Explicabo vero corrupti fuga,</p>
        </div> */}
        
        </Box>
        </Container>
        </>);
}