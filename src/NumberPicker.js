import React from "react";
import NumericInput from 'react-numeric-input';

class NumberSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1.99
        }
    }

    render() {
        return <NumericInput
                    min={1}
                    max={8}
                    value={4}
                    onChange={function(valueAsNumber, valueAsString, input) {console.log(valueAsNumber + "," + valueAsString + "," + input);}}
                />;
    }
};

export default NumberSpinner;
