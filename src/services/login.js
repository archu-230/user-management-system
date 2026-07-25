// import urls from "../constants/apiUrls.js";
import axios from "axios";
export const login = async ()=> {
    try{
        const response = await axios.get(urls.LOGIN,{
            username:"admin",
            password: "admin123",
        });
        return response.data;
    }catch(err){
        // console.log(response.data);
        throw err;
    }
};

export const verify =async ()=>{
 try{
    const response = await api.get("/login");
    response.data;


 }
 catch(err){
    throw err
 }
 
}
export default login;