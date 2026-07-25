import Button from '@mui/material/Button';
import createUser from '../services/customerApi.js';
import Saveicon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Ink from './Link.jsx';
import { Contain } from './Container.jsx';
function CustomButton({text}){
    const user = {
        firstName:"dhina",
        lastName:"s",
        email:"abc@gmail.com",
        phone:"1",
        password:"12",
        id:1

    }

    // const handleClick = ()=>{
    //     createUser(user);
    // }
return (
  <>
  <Contain>
    <Ink link="www.google.com" text='hello'/>
    <Box sx={{m:8,alignItems:"center",height:"30vh" ,justifyContent:"center",display:"flex", width:300,bgcolor:'orange',borderStyle:"dashed",borderWidth:50 ,p:2,borderRadius:5}}>
      <Typography variant="body1" align="center" gutterBottom color="error">
        <Link variant="button" color="secondary" >DashBoard</Link>
        <br />
      </Typography>
      <Button variant="contained" />
      <Button
        variant="outlined"
        color="success"
        size="medium"
        startIcon={<Saveicon />}
        onClick={() => createUser(user)}
      >
        {text}
      </Button>
    </Box>
  </Contain>
  </>
);
}

export default CustomButton;