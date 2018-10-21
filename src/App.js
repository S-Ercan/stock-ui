import React, {Component} from 'react';
import ReactFC from 'react-fusioncharts';
import axios from 'axios';
import PubSub from 'pubsub-js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], numClusters: 5, daysAgo: -180};
        this.loadData();
        var self = this;

        var daysAgoListener = function (msg, data) {
            self.setState({daysAgo: data});
            self.loadData();
        };
        var numClustersListener = function (msg, data) {
            self.setState({numClusters: data});
            self.loadData();
        };

        var daysAgoTopicSubscriptionToken = PubSub.subscribe('daysAgoTopic', daysAgoListener);
        var numClustersTopicSubscriptionToken = PubSub.subscribe('numClustersTopic', numClustersListener);
    }

    loadData() {
        axios.get("http://localhost:8080/trendFromDaysAgoAndWithNumberOfClusters?daysAgo=" + this.state.daysAgo + "&numberOfClusters=" + this.state.numClusters)
            .then(response => this.setState({data: response.data}));
    }

    render() {
        if (this.state.data.length === 0) {
            return <div>Loading...</div>;
        }

        var dataSource = {
            chart: {
                "caption": "K-means clustering",
                "bubbleScale": 0.33,
                "plotTooltext": "$name ; difference over period:  $yvalue%",
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
