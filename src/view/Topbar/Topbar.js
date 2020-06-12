import React from "react";
import {makeStyles, Typography, Grid} from "@material-ui/core";

function Topbar() {

    const classes = useStyles();

    return (
        <div className={classes.topbar_wrapper}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">Covid-19 Summary</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    topbar_wrapper: {
        backgroundColor: theme.palette.theme.main,
        color: "white",
        textAlign: "center",
        padding: "20px"
    }
}))
export default Topbar;