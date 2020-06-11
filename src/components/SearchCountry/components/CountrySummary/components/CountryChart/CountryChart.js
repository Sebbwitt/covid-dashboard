import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";


class CountryChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryName: this.props.countryName,
            countryStatus: this.props.countryStatus,
            data: [],
            apiError: false
        };
    }
    
    componentDidMount() {
        this.retrieveDailyData(this.state.countryName, this.state.countryStatus);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.countryName !== this.props.countryName){
            this.setState({countryName: this.props.countryName}, () => {
                this.setState({countryStatus: this.props.countryStatus}, () => {
                    this.retrieveDailyData(this.state.countryName, this.state.countryStatus);
                });
            });
        }
    }

    retrieveDailyData = (cname, status) => {
        let url = `https://api.covid19api.com/dayone/country/${cname}/status/${status}`;

        axios.get(url).then(
            (res) => {
                res.data.map((each) => {
                    each.Date = this.getFormattedDate(new Date(each.Date));
                });
                this.setState({data: res.data}, () => {
                    this.setState({apiError: false});
                });
            }
        ).catch(
            this.setState({apiError: true})
        )
    }

    getFormattedDate = (date) => {
        return `${date.getDate()}-${date.toLocaleString('default', {month: 'long'}).slice(0,3)}`;
    }

    render() {
        return (
            <div>
                <Paper>
                    <Typography variant="h6">{this.state.countryStatus.toUpperCase()} CASES</Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart label="hello" data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="Cases" stoke="#8884d8"/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip/>
                            <XAxis dataKey="Date"/>
                            <YAxis/>
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>               
            </div>
        )
    }
}

CountryChart.propTypes = {
    countryName: PropTypes.string.isRequired,
    countryStatus: PropTypes.string.isRequired
}

export default CountryChart;
