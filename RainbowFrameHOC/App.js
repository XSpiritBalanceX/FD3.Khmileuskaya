import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton';

let colors=require('./colors.json');

ReactDOM.render(
  <DoubleButton caption1={"однажды"}
    caption2={"пору"}
    cbPressed={ num => alert(num) } >
    в студёную зимнюю!
  </DoubleButton>
  , document.getElementById('container') 
);

