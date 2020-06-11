import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Paper, Typography, Grid } from "@material-ui/core";

import CountryDetails from "./components/CountryDetails";
import CountryChart from "./components/CountryChart";


class CountrySummary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            country: this.props.country
        }
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.country.Country !== this.props.country.Country){
            this.setState({country: this.props.country});
        }
    }

    render() {

        const country = this.state.country;
        const classes = this.props.classes;

        return (
            <div className={classes.countrySummary_wrapper}>
                <Grid container spacing={3}>
                    <Grid container item xs={12} >
                        <CountryDetails countryDetails={country}/>
                    </Grid>
                    <Grid item xs={12}>
                        <CountryChart countryName={this.state.country.Slug} countryStatus="confirmed"/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


const styles = {
    countrySummary_wrapper: {
        padding: "40px 0",
        height: "100%",
        textAlign: "center"
    }
}

CountrySummary.propTypes = {
    country: PropTypes.object.isRequired
}

export default withStyles(styles)(CountrySummary);
