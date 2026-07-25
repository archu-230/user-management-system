import CustomButton from "../../components/CustomeButton";
import login from '../../services/login.js';
import Card from '@mui/material/Card';
import createUser from "../../services/customerApi.js";
function Home(){

//     const handleLogin =async ()=>{
//     try{
//         const data = await login();
//         console.log(data);
//     }
//     catch(err){
//        console.error(err);
//     }
// }
return (

<CustomButton text="login" />
);
}
export default Home;