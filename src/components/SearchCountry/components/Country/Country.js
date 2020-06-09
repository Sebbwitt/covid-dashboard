import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";

class Country extends Component {
    render() {
        const country = this.props.country;

        return (
            <div>
                <Paper>
                    <Typography variant="h5">Country: {country.Country}</Typography>
                    <Typography variant="h5">Total Confirmed: {country.TotalConfirmed}</Typography>
                </Paper>
            </div>
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

Country.propTypes = {
    country: PropTypes.object.isRequired
}

export default Country;
