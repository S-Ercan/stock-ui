import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import './App.css';

class App extends Component {
  render() {
    var chartData = {
        chart: {},
        data: [{value: 500}, {value: 600}, {value: 700}]
    };
    return <ReactFC
           type = "Column2D"
           className = "fc-column2d"
           dataFormat = "JSON"
           dataSource = {chartData}/>;
  }
}

export default App;
