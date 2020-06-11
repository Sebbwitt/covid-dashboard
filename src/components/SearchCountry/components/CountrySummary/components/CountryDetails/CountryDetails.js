import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid, withStyles } from "@material-ui/core";

class CountryDetails extends Component {
    render() {

        const classes = this.props.classes;
        const countryDetails = this.props.countryDetails;
        const updateDate = countryDetails.Date.slice(0,10);
        const totalActiveCases = countryDetails.TotalConfirmed - countryDetails.TotalRecovered - countryDetails.TotalDeaths;
        return (
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Summary of cases in {countryDetails.Country}</Typography>
                    <Typography variant="body1">last updated: {updateDate}</Typography>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={3}>
                        <Paper variant="outlined" className={classes.paperStyles}>
                            <Typography variant="h5">Total Confirmed</Typography>
                            <Typography variant="h6">{countryDetails.TotalConfirmed}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper variant="outlined" className={classes.paperStyles}>
                            <Typography variant="h5">Total Active Cases</Typography>
                            <Typography variant="h6">{totalActiveCases}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper variant="outlined" className={classes.paperStyles}>
                            <Typography variant="h5">Total Recovered</Typography>
                            <Typography variant="h6">{countryDetails.TotalRecovered}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper variant="outlined" className={classes.paperStyles}>
                            <Typography variant="h5">Total Deaths</Typography>
                            <Typography variant="h6">{countryDetails.TotalDeaths}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

/**  
{
    "Country": "Afghanistan",
    "CountryCode": "AF",
    "Slug": "afghanistan",
    "NewConfirmed": 575,
    "TotalConfirmed": 20917,
    "NewDeaths": 12,
    "TotalDeaths": 369,
    "NewRecovered": 296,
    "TotalRecovered": 2171,
    "Date": "2020-06-09T08:25:40Z"
}
*/

const styles = {
    countryDetails_Wrapper: {
        width: "100%"
    },
    paperStyles: {

    }
}


CountryDetails.propTypes = {
    countryDetails : PropTypes.object.isRequired
}

export default withStyles(styles)(CountryDetails);
