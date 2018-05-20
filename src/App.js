import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        axios.get("http://localhost:8080/test")
            .then(response => this.setState({data: response.data}));
    }

    render() {
        var chartDataList = [];
        this.state.data.forEach(
            function(timeSeries) {
                chartDataList.push({label: timeSeries.tradingDay, value: timeSeries.closingPrice});
            }
        );

        var chartData = {
            chart: {},
            data: chartDataList
        };
        return <ReactFC
               type = "line"
               width = "1400"
               height = "800"
               className = "fc-column2d"
               dataFormat = "JSON"
               dataSource = {chartData}/>;
    }
}

export default App;
