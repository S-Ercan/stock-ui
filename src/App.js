import React, {Component} from 'react';
import ReactFC from 'react-fusioncharts';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        axios.get("http://localhost:8080/trend")
            .then(response => this.setState({data: response.data}));
    }

    render() {

        if (this.state.data.length === 0) {
            console.log();
            return <div>Loading...</div>;
        }

        var dataSource = {
            chart: {
                "caption": "K-means clustering",
                "bubbleScale": 0.2,
                "plotTooltext": "$name ; cluster:  $yvalue%",
//                      "subcaption": "in higher education",
//                      "yaxisname": "20 year average-annual return on degree, %",
//                      "xaxisname": "Admission rate, %",
                "anchorBgColor": "#FF0000",
                "xAxisMinValue": "23",
                "xAxisMaxValue": "40",
                "yaxismaxvalue": "25",
                "showzeroplane": "0",
                "yaxisminvalue": "-15",
                "anchorradius": "1",
                "showValues": "1",
//                      "plotTooltext": "<div id='valueDiv'><b>$seriesName</b>, Admission rate % : <b>$xDataValue</b>, Return % : <b>$yDataValue</b></div>"
            },
            dataset: this.state.data
        };

        return <ReactFC
            type='bubble'
            width="1200"
            height="800"
            dataFormat='JSON'
            dataSource={dataSource}
        />;
    }
}

export default App;
