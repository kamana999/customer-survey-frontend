import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper,Box, Typography,} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyle = makeStyles({
    paper:{
        marginTop:100,
        textAlign:"center",
        border:0
    },
    btn1:{
        marginTop:50,
        marginBottom:50,
    }
});
function Submit(){
    const style = useStyle();
    return(
        <React.Fragment>
            <Box>
                <Paper className={style.paper}>
                    <Typography variant="h2">Thanks for your presicous TIME!</Typography>
                    <Button className={style.btn1} variant="contained" color="secondary"><Link to="/" style={{textDecoration:'none', color:'white' }}>Start Again</Link></Button>
                </Paper>
            </Box>
        </React.Fragment>
    );
    
}
export default Submit;