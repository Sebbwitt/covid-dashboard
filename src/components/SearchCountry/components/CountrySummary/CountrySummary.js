import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";

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
                <Grid container spacing={3} className={classes.c_grid_wrapper}>
                    <Grid container item xs={12} >
                        <CountryDetails countryDetails={country}/>
                    </Grid>
                    <Grid item xs={12}>
                        <CountryChart countryName={this.state.country.Slug}/>
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
    },
    c_grid_wrapper: {
        width: "100%",
        margin: "0 auto"
    },
}

CountrySummary.propTypes = {
    country: PropTypes.object.isRequired
}

export default withStyles(styles)(CountrySummary);
