import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

var labelText='Магазин косметики IShop';
var productsArr=require('./products.json');
var headerArr={name:'Название продукта', price:'Цена', url:'Фото', type:'Тип кожи', count:'Остаток на складе', control:'Управление'};
var workModel=1;

ReactDOM.render(
  <Ishop 
  label={labelText} 
  header={headerArr}
  products={productsArr}
  startWorkModel={workModel}
  />
  , document.getElementById('container') 
);

