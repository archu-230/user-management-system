// import API_URLS from "../../constants/apiUrls.js"; 
import axios from 'axios';

async function createUser(user){

try{
     const response = await axios.post("http://localhost:8080/api/customer/create",user);
    console.log(response);
    return response;
}
catch(err){
    throw err
}
}
export default createUser;
