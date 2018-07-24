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
//        var chartDataList = [];
//        this.state.data.forEach(
//            function(timeSeries) {
//                chartDataList.push({label: timeSeries.tradingDay.split('T')[0], value: timeSeries.closingPrice});
//            }
//        );
//
//        var chartData = {
//            chart: {},
//            data: chartDataList
//        };
//        return <ReactFC
//               type = "line"
//               width = "1400"
//               height = "800"
//               className = "fc-column2d"
//               dataFormat = "JSON"
//               dataSource = {chartData}/>;

          var data = [{
               "y": 14.42,
               "x": 18.88
             }, {
               "y": 10.54,
               "x": 17.29
             }, {
               "y": 12.51,
               "x": 4.72
             }, {
               "y": 10.89,
               "x": 18.94
             }, {
               "y": 9.69,
               "x": 39.87
             }, {
               "y": 8.74,
               "x": 38.88
             }, {
               "y": 6.34,
               "x": 31.3
             }, {
               "y": 6.01,
               "x": 22.06
             }, {
               "y": 7.49,
               "x": 36.19
             }, {
               "y": -7.93,
               "x": 70.24
             }, {
               "y": -6.87,
               "x": 63.67
             }];

          var dataSource = {
              chart: {"caption": "Selectivity and Returns of majors",
                      "subcaption": "in higher education",
                      "yaxisname": "20 year average-annual return on degree, %",
                      "xaxisname": "Admission rate, %",
                      "anchorBgColor": "#FF0000",
                    "xAxisMinValue": "23",
                    "xAxisMaxValue": "95",
                      "yaxismaxvalue": "25",
                      "showzeroplane": "0",
                      "yaxisminvalue": "-15",
                      "anchorradius": "2",
                      "plotTooltext": "<div id='valueDiv'><b>$seriesName</b>, Admission rate % : <b>$xDataValue</b>, Return % : <b>$yDataValue</b></div>"},
              dataset: [{data: [{
                  "y": 14.42,
                  "x": 18.88
                }, {
                  "y": 10.54,
                  "x": 17.29
                }, {
                  "y": 12.51,
                  "x": 4.72
                }, {
                  "y": 10.89,
                  "x": 18.94
                }, {
                  "y": 9.69,
                  "x": 39.87
                }, {
                  "y": 8.74,
                  "x": 38.88
                }, {
                  "y": 6.34,
                  "x": 31.3
                }, {
                  "y": 6.01,
                  "x": 22.06
                }, {
                  "y": 7.49,
                  "x": 36.19
                }, {
                  "y": -7.93,
                  "x": 70.24
                }, {
                  "y": -6.87,
                  "x": 63.67
                }]
          }]};

          return <ReactFC
            type = 'scatter'
            width = "600"
            height = "400"
            dataFormat = 'JSON'
            dataSource = {dataSource}
            />;
        }
}

export default App;
