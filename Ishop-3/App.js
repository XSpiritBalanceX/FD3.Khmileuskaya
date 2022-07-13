import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

var labelText='Магазин косметики IShop';
var productsArr=require('./shortProduct.json');
var headerArr={name:'Название продукта', price:'Цена BYN', url:'Фото', type:'Тип кожи', count:'Остаток на складе', control:'Управление'};
var workModel=0;

ReactDOM.render(
  <Ishop 
  label={labelText} 
  header={headerArr}
  products={productsArr}
  startWorkModel={workModel}
  />
  , document.getElementById('container') 
);

