import { IconButton } from "@mui/material";
import Brightness from '@mui/icons-material/Brightness6';
function Theme({onClickIcon}){
return(
    <>
    <IconButton onClick={onClickIcon}>
        <Brightness />
    </IconButton>
    </>
);
}
export default Theme;