import React from "react";
import NumericInput from 'react-numeric-input';
import PubSub from 'pubsub-js';

class NumberSpinner extends React.Component {
    render() {
        return <NumericInput
            min={2}
            max={8}
            value={5}
            onChange={function (valueAsNumber, valueAsString, input) {
                PubSub.publish('numClustersTopic', valueAsNumber);
            }}
        />;
    }
};

export default NumberSpinner;
