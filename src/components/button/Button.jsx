 import {Button,Box} from "@mui/material";
 
 export default function button({text,onClick,color,sIcon,eIcon,value}){
return (<>

<Button variant="outlined" color={color} size="large" sx={{
    width:100,color:"bisque",borderRadius:3}} startIcon={sIcon} endIcon={eIcon} onClick={onClick} >
    {text}
</Button >
</>);
 }