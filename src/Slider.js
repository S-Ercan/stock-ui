import React, {Component} from 'react';
import ReactSlider from 'react-slider';
import './Slider.css';

class Slider extends Component {
    render() {
        return <ReactSlider
            defaultValue={[0, 100]}
            withBars
            onChange={function () {
                console.log(arguments[0][0], arguments[0][1]);
            }}
        />;
    }
}

export default Slider;
