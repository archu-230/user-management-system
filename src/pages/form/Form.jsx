import TextField from "../../components/textfiled/TextField";
import { Stack  } from "@mui/material";
import Button from "../../components/button/Button";
import { useState } from "react";


export default function userForm(){
const [rows,setrows] =useState({
    name:"",
    email:""
});
return(<>
<Stack spacing={2} sx={{display:"flex",alignItems:"center",m:2,justifyContent:"center"}}>

<TextField label="Enter your name" value={rows.name} onChange={(e)=>setrows({...rows,name:e.target.value,})} />
<TextField label="Enter your mail"  />

<Button text={"submit"}onClick={()=>{rows()}} />
</Stack>

</>);
}
