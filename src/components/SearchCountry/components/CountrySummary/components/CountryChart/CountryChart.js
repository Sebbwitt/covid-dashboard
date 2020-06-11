import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import { LineChart, Line, Legend, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";


class CountryChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryName: this.props.countryName,
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
                this.retrieveDailyData(this.state.countryName);
            });
        }
    }

    retrieveDailyData = (cname) => {
        let url = `https://api.covid19api.com/dayone/country/${cname}`;

        axios.get(url).then(
            (res) => {
                res.data.map((each) => {
                    each.Date = this.getFormattedDate(new Date(each.Date));
                    return each;
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
                    <Typography variant="h6">OVERALL CASES</Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart label="hello" data={this.state.data}>
                            <Line strokeWidth={2} type="monotone" dataKey="Confirmed" dot={false} stroke="#032357"/>
                            <Line strokeWidth={2} type="monotone" dataKey="Recovered" dot={false} stroke="#056349"/>
                            <Line strokeWidth={2} type="monotone" dataKey="Deaths" dot={false} stroke="#8a0e03"/>
                            <Line strokeWidth={2} type="monotone" dataKey="Active" dot={false} stroke="#6b3b53"/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip/>
                            <XAxis dataKey="Date"/>
                            <YAxis/>
                            <Legend/>
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>               
            </div>
        )
    }
}

CountryChart.propTypes = {
    countryName: PropTypes.string.isRequired
}

export default CountryChart;
