import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

var listArr=['california', 'everything', 'aboveboard', 
    'washington', 'basketball', 'weathering', 'characters', 
    'literature', 'contraband', 'appreciate'];

ReactDOM.render(
  <Filter listArr={listArr}/>
  , document.getElementById('container') 
);

