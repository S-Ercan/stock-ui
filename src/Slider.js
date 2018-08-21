import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import ReactSlider from 'react-slider';
import './Slider.css';

class Slider extends Component {
    constructor(props) {
        super(props);
//        this.state = {data: []};
//        axios.get("http://localhost:8080/trend")
//            .then(response => this.setState({data: response.data}));
    }

    render() {
        return <ReactSlider
            defaultValue={[0, 100]}
            withBars
            onChange={function() {console.log(arguments[0][0], arguments[0][1]);}}
        />;
    }
}

export default Slider;
