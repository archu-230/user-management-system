import { TextField } from "@mui/material";

export default function userTextField(props){
return(<>
<TextField variant="outlined" {...props} sx={{width:250,...props.sx}} />

</>);
}