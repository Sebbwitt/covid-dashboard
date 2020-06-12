import React from "react";
import {makeStyles, Typography, Grid} from "@material-ui/core";

function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.footer_wrapper}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6">Just a small project... :")</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    footer_wrapper: {
        backgroundColor: theme.palette.theme.main,
        color: "white",
        textAlign: "center",
        padding: "20px"
    },
    email_link: {
        color: "white"
    }
}))
export default Footer;