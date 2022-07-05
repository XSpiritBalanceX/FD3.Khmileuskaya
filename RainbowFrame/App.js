import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colors=require('./colors.json');

ReactDOM.render(
  <RainbowFrame colors={colors}>
    <div style={{margin:'20px 0 20px 0'}}>Hello!</div>
  </RainbowFrame>
    , document.getElementById('container') 
);

