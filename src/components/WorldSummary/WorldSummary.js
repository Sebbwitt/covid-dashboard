import React, { Component } from "react";
import axios from "axios";
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
                <Grid container spacing={2} xs={12}>
                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">Total Confirmed</Typography>
                                <Typography variant="h6">{this.state.worldSummaryData.TotalConfirmed}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">Total Recovered</Typography>
                                <Typography variant="h6">{this.state.worldSummaryData.TotalRecovered}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">Total Deaths</Typography>
                                <Typography variant="h6">{this.state.worldSummaryData.TotalDeaths}</Typography>
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
        width: "100%"
    },
    header_margin: {
        marginBottom: "20px"
    }
}
export default withStyles(styles)(WorldSummary);
