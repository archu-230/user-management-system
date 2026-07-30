import TextField from "../../components/textfiled/TextField";
import { Stack  } from "@mui/material";
import Button from "../../components/button/Button";
import { useState } from "react";


const handleSubmit = ()=> {
    console.log(rows);
    return rows;
}

export default function userForm(){
const [rows,setrows] =useState({
    name:"",
    email:""
});
return(<>
<Stack spacing={2} sx={{display:"flex",alignItems:"center",m:2,justifyContent:"center"}}>

<TextField label="Enter your name" value={rows.name} onChange={(e)=>setrows({...rows,name:e.target.value,})} />
<TextField label="Enter your mail"  value={rows.email} onChange={(e)=>setrows({...rows,email:e.target.value})}/>
<TextField label ="Enter your password" />

<Button text={"submit"} onClick={handleSubmit} />
</Stack>

</>);
}
