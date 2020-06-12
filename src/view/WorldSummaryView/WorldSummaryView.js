import React from "react";
import WorldSummary from "components/WorldSummary";
import { makeStyles } from "@material-ui/core";

function WorldSummaryView() {

    const classes = useStyles();

    return (
        <div className={classes.wordSummary_wrapper}>
            <WorldSummary/>
        </div>
    )
}

const useStyles = makeStyles({
    wordSummary_wrapper: {
        margin: "0 auto 20px"
    }
})
export default WorldSummaryView;