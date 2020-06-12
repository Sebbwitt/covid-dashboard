import React from "react";
import WorldTable from "components/WorldTable";
import { makeStyles } from "@material-ui/core";

function WorldTableView() {

    const classes = useStyles();
    return (
        <div className={classes.worldTable_wrapper}>
            <WorldTable/>
        </div>
    )
}

const useStyles = makeStyles({
    worldTable_wrapper: {
        margin: "0 auto 40px"
    }
})
export default WorldTableView;
