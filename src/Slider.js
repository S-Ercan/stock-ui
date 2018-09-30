import React, {Component} from 'react';
import ReactSlider from 'react-slider';
import PubSub from 'pubsub-js';
import './Slider.css';

class Slider extends Component {
    render() {
        return <ReactSlider
            min={-60}
            max={-10}
            defaultValue={[-60]}
            withBars
            onChange={function () {
                PubSub.publish('daysAgoTopic', arguments[0]);
            }}
        />;
    }
}

export default Slider;
