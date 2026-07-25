import axios from "axios";
const BASE_URL= "http://localhost:8080/api/";
    
const API_URLS ={
    BASE_URL,
    LOGIN:`${BASE_URL}login`,
    USERS:"",
    USER_BY_ID:(id)=>`/${id}`,
    CUSTOMER:axios.create(`${BASE_URL}customer/`)
};
export default API_URLS;