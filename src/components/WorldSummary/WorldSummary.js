import React, { Component } from "react";
import axios from "axios";

import {toThousandsComma} from "common/Util";

import { Typography, Grid, Card, CardContent, withStyles } from "@material-ui/core";

class WorldSummary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            worldSummaryData: {},
            apiError: false
        }
    }

    componentDidMount() {
        let url = "https://api.covid19api.com/world/total";

        axios.get(url).then(
            (res) => {
                this.setState({worldSummaryData: res.data}, () => {
                    this.setState({apiError: false});
                });
            }
        ).catch(() => {
            this.setState({apiError: true});
        })
    }
    
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.worldSummary_Wrapper}>
                <Typography variant="h4" className={classes.header_margin}>World Overview</Typography>
                <Grid container spacing={2} className={classes.grid_wrapper}>
                    <Grid item xs={12} sm={3}>
                        <Card variant="outlined" className={classes.CardStyles_Confirmed}>
                            <CardContent>
                                <Typography variant="h6">Total Confirmed</Typography>
                                <Typography variant="h6">{toThousandsComma(this.state.worldSummaryData.TotalConfirmed)}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card variant="outlined" className={classes.CardStyles_Active}>
                            <CardContent>
                                <Typography variant="h6">Active Cases</Typography>
                                <Typography variant="h6">{toThousandsComma(this.state.worldSummaryData.TotalConfirmed - this.state.worldSummaryData.TotalRecovered)}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card variant="outlined" className={classes.CardStyles_Recovered}>
                            <CardContent>
                                <Typography variant="h6">Total Recovered</Typography>
                                <Typography variant="h6">{toThousandsComma(this.state.worldSummaryData.TotalRecovered)}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card variant="outlined" className={classes.CardStyles_Deaths}>
                            <CardContent>
                                <Typography variant="h6">Total Deaths</Typography>
                                <Typography variant="h6">{toThousandsComma(this.state.worldSummaryData.TotalDeaths)}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styles = {
    worldSummary_Wrapper: {
        textAlign: "center",
        width: "95%",
        margin: "0 auto 50px"
    },
    CardStyles_Confirmed: {
        width: "100%",
        backgroundColor: "rgba(3, 36, 89, 0.7)"
    },
    CardStyles_Recovered: {
        width: "100%",
        backgroundColor: "rgba(5, 97, 71, 0.7)"
    },
    CardStyles_Deaths: {
        width: "100%",
        backgroundColor: "rgba(140, 14, 3, 0.7)"
    },
    CardStyles_Active: {
        width: "100%",
        backgroundColor: "rgba(109, 60, 84, 0.7)"
    },
    grid_wrapper: {
        width: "100%",
        margin: "0 auto"
    },
    header_margin: {
        marginBottom: "20px"
    }
}
export default withStyles(styles)(WorldSummary);
