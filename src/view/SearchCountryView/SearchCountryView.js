import React from "react";
import SearchCountry from "components/SearchCountry";
import { makeStyles } from "@material-ui/core";

function SearchCountryView(props) {

    const classes = useStyles();

    return (
        <div className={classes.SearchCountryView}>
            <SearchCountry country={props.match.params.country} history={props.history}/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    SearchCountryView: {
        padding: "40px"
    }
}))

export default SearchCountryView;