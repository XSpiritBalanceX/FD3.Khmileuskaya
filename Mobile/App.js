import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=[ 
  {id:101, surName:"Иванов", firstName:'Иван', lastName:'Иванович', balance:200}, 
  {id:105, surName:"Сидоров", firstName:'Сидор', lastName:'Сидорович', balance:250}, 
  {id:110, surName:"Петров", firstName:'Петр', lastName:'Петрович', balance:180},
  {id:115, surName:"Григорьев", firstName:'Григорий', lastName:'Григорьевич', balance:-220},
];

ReactDOM.render(
  <MobileCompany 
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

