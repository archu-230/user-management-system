import { TextField } from "@mui/material";

export default function userTextField({label,value,onChange,type}){
return(<>
<TextField variant="outlined" sx={{width:250}} value={value} type={type} label={label} onChange={onChange}/>

</>);
}