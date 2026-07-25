import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
function Ink({text,link}){
    return(
    <>
    <Typography variant="h5">
        <Link href ={link} sx={{color:"red"}}>{text}</Link>
    </Typography>
    </>
    );
}
export default Ink;