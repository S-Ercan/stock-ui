import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Slider from './Slider';
import NumberSpinner from './NumberPicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Slider/>, document.getElementById('slider'));
ReactDOM.render(<NumberSpinner/>, document.getElementById('number-picker'));
registerServiceWorker();
