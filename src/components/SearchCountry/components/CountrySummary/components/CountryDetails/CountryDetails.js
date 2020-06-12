import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Typography, Grid, withStyles, CardContent } from "@material-ui/core";

class CountryDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            country: this.props.countryDetails
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.countryDetails.Country !== this.props.countryDetails.Country) {
            this.setState({country: this.props.countryDetails});
        }
    }
    

    render() {

        const classes = this.props.classes;
        const countryDetails = this.props.countryDetails;
        const getFormattedDate = () => { let d = (new Date(countryDetails.Date)); return `${d.getDate()}-${d.toLocaleString('default', {month: 'long'})}-${d.getFullYear()}`};
        const activeCases = countryDetails.TotalConfirmed - countryDetails.TotalRecovered - countryDetails.TotalDeaths;
        return (
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Summary of cases in {countryDetails.Country}</Typography>
                    <Typography variant="body1">last updated: {getFormattedDate()}</Typography>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card variant="outlined" className={classes.CardStyles}>
                            <CardContent>                         
                                <Typography variant="h6">Total Confirmed</Typography>
                                <Typography variant="h6">{countryDetails.TotalConfirmed}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card variant="outlined" className={classes.CardStyles}>
                            <CardContent> 
                                <Typography variant="h6">Active Cases</Typography>
                                <Typography variant="h6">{activeCases}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card variant="outlined" className={classes.CardStyles}>
                            <CardContent>
                                <Typography variant="h6">Total Recovered</Typography>
                                <Typography variant="h6">{countryDetails.TotalRecovered}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card variant="outlined" className={classes.CardStyles}>
                            <CardContent>
                                <Typography variant="h6">Total Deaths</Typography>
                                <Typography variant="h6">{countryDetails.TotalDeaths}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const styles = {
    countryDetails_Wrapper: {
        width: "100%"
    },
    CardStyles: {
        width: "100%"
    }
}


CountryDetails.propTypes = {
    countryDetails : PropTypes.object.isRequired
}

export default withStyles(styles)(CountryDetails);
