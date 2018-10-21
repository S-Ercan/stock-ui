import React, {Component} from 'react';
import ReactSlider from 'react-slider';
import PubSub from 'pubsub-js';
import './Slider.css';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {value:-180};
    }

    render() {
        var self = this;
        return <div>
            <p>Showing trends between now and {this.state.value * -1} days ago</p>
            <ReactSlider
                min={-180}
                max={-10}
                defaultValue={[-180]}
                withBars
                onAfterChange={function () {
                    PubSub.publish('daysAgoTopic', arguments[0]);
                    self.setState({value: arguments[0]});
                }}
            />
        </div>;
    }
}

export default Slider;
