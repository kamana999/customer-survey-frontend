import React from "react";
import { AppBar, Toolbar, Typography,} from "@material-ui/core";

function Header(){
    return(
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Customer Survey
                    </Typography>
                </Toolbar>
                </AppBar>
        </React.Fragment>
    );
}
export default Header;