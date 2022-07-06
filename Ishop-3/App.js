import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

var labelText='Магазин косметики IShop';
let productsArr=require('./products.json');
var headerArr={name:'Название продукта', price:'Цена', url:'Фото', type:'Тип кожи', count:'Остаток на складе', control:'Управление'};

ReactDOM.render(
  <Ishop 
  label={labelText} 
  header={headerArr}
  products={productsArr}
  />
  , document.getElementById('container') 
);

