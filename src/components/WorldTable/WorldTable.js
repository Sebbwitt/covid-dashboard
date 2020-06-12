import React, { Component } from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from "@material-ui/core/TableHead";

class WorldTable extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            worldData: [],
            apiError: false,
            pageIndex: 0,
            rowsPerPage: 10
        }
    }
    
    componentDidMount() {
        this.getWorldData();
    }

    getWorldData = () => {
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

    handleChangePage = (e, newPage) => {
        this.setState({pageIndex: newPage});
    }

    handleChangeRowsPerPage = (e) => {
        this.setState({rowsPerPage: parseInt(e.target.value, 10)});
        this.setState({pageIndex: 0});
    }

    render() {
        const rows = this.state.worldData;
        const constState = this.state;
        const emptyRowsNum = constState.rowsPerPage - Math.min(constState.rowsPerPage, rows.length - constState.pageIndex * constState.rowsPerPage);
        return (
            <div>
            <TableContainer component={Paper} style={{margin:"0 auto",width:"95%"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Total Confirmed</TableCell>
                            <TableCell>Total Recovered</TableCell>
                            <TableCell>Total Active</TableCell>
                            <TableCell>Total Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows
                            .slice(constState.pageIndex * constState.rowsPerPage, constState.pageIndex * constState.rowsPerPage + constState.rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={row.Country}>
                                    <TableCell>{constState.pageIndex * constState.rowsPerPage + index + 1}</TableCell>
                                    <TableCell>{row.Country}</TableCell>
                                    <TableCell>{row.TotalConfirmed}</TableCell>
                                    <TableCell>{row.TotalRecovered}</TableCell>
                                    <TableCell>{row.TotalConfirmed - row.TotalRecovered}</TableCell>
                                    <TableCell>{row.TotalDeaths}</TableCell>
                                </TableRow>
                            ))
                        }
                        {
                            emptyRowsNum > 0 && (
                                <TableRow style={{ height: 53 * emptyRowsNum }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: rows.length}]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.pageIndex}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    SelectProps={{
                        native: true,
                    }}
                />
            </TableContainer>
            </div>
        )
    }
}

/**
     {
     "Country": "Afghanistan",
    "CountryCode": "AF",
    "Slug": "afghanistan",
    "NewConfirmed": 748,
    "TotalConfirmed": 22890,
    "NewDeaths": 21,
    "TotalDeaths": 426,
    "NewRecovered": 313,
    "TotalRecovered": 3326,
    "Date": "2020-06-12T10:47:50Z"
    }
 */
export default WorldTable;
