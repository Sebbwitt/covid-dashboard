import React, { Component } from "react";
import { TextField, withStyles, Typography } from "@material-ui/core";
import Public from "@material-ui/icons/Public";
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from "axios";
import Autocomplete from '@material-ui/lab/Autocomplete';

import CountrySummary from "./components/CountrySummary";

import {isEmpty} from "common/Validate";

class SearchCountry extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            searchInput: "",
            covidSummaryCountries: [],
            apiError: false,
            countrySelected: {},
            countrySelectedName: props.country || ""
        }
    }

    componentDidMount = () => {
        this.getCovidSummary();
    }
    
    changeSearch = (e, newValue) => {
        this.setState({searchInput: newValue}, () => {
            let matchedCountry = (this.state.covidSummaryCountries.filter( (each) => each.Country === this.state.searchInput))[0];
            if (typeof matchedCountry !== "undefined") {
                this.setState({countrySelected: matchedCountry});
                this.setState({countrySelectedName: matchedCountry.Country});
                this.props.history.push(`/covid-dashboard/${matchedCountry.Country}`);
            } else {
                this.setState({countrySelected: {}});
            }
        });        
    }

    submitSearch = (e) => {
        e.preventDefault();
    }

    getCovidSummary = () => {
        let url = "https://api.covid19api.com/summary";
        //let url_test = "https://my-json-server.typicode.com/sebbwitt/covid-dashboard/summary/";
        
        axios.get(url)
            .then(
                (res) => {
                    this.setState({covidSummaryCountries: res.data.Countries}, () => {
                        let countryParamArr = this.state.covidSummaryCountries.filter( (each) => each.Country.toLowerCase() === this.state.countrySelectedName.toLowerCase());
                        if(countryParamArr.length === 1) {
                            this.setState({countrySelectedName: countryParamArr[0].Country});
                            this.setState({countrySelected: countryParamArr[0]});
                        }
                    });
                },
                (err) => {
                    this.setState({apiError: true});
                }
            )
    }

    render() {

        const classes = this.props.classes;
        
        return (
            <div className={classes.searchWrapper}>
                <Typography variant="h4">Search by Country name</Typography>
                <Autocomplete
                    className={classes.autocompleteSearchInput}
                    options={this.state.covidSummaryCountries}
                    getOptionLabel={(option) => option.Country}
                    onInputChange={this.changeSearch}
                    renderInput={(params) => {
                        params.InputProps.startAdornment = (
                            <InputAdornment position="start">
                                <Public style={{paddingRight:"5px"}}/>
                                <Typography variant="h5">   Country: </Typography>
                            </InputAdornment>
                        )
                        params.InputProps.className = (classes.resizeTextField);
                        params.inputProps.value = this.state.countrySelectedName;
                        return (<TextField
                            {...params}/>)
                    }}
                />
                { 

                    !isEmpty(this.state.countrySelected) && !this.state.apiError && <CountrySummary country={this.state.countrySelected}/>
                    
                }
                
            </div>
            
        )
    }
}

const styles = (theme) => ({
    searchWrapper: {
        textAlign: "center"
    },
    autocompleteSearchInput: {
        width: "50%",
        minWidth: "300px",
        margin: "30px auto 0px"
    },
    resizeTextField: {
        fontSize: theme.typography.h6.fontSize
    }
})

export default withStyles(styles)(SearchCountry);
