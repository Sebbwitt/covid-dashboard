import React from "react";
import SearchCountry from "components/SearchCountry";
import { makeStyles } from "@material-ui/core";

function SearchCountryView() {

    const classes = useStyles();


    return (
        <div className={classes.SearchCountryView}>
            <SearchCountry/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    SearchCountryView: {
        padding: "40px"
    }
}))

export default SearchCountryView;