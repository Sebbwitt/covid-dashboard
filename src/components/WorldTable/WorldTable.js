import React, { Component } from "react";
import axios from "axios";

class WorldTable extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            worldData: [],
            apiError: false
        }
    }
    
    componentDidMount() {
        
        let url = "https://api.covid19api.com/summary";
        axios.get(url).then(
            (res) => {
                this.setState({worldData: res.data.Countries}, () => {
                    this.setState({apiError: false});
                });
            }
        ).catch( () => {
            this.setState({apiError: true});
        });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default WorldTable;
