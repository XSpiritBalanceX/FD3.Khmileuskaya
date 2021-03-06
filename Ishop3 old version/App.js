import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

var labelText='Магазин косметики IShop';
    var headerArr={name:'Название продукта', price:'Цена', url:'Фото', type:'Тип кожи', count:'Остаток на складе', control:'Управление'};
    var productsArr=[ 
      {namePdoduct:'Пенка для умывания',code:1,price:'15 BYN', urlProduct:'imagesShop/penka.png',typeScin: 'Нормальная и сухая', count:10, control:'Удалить'}, 
      {namePdoduct:'Крем для лица',code:2,price:'28 BYN', urlProduct:'imagesShop/cream.png',typeScin: 'Сухая', count:8, control:'Удалить'}, 
      {namePdoduct:'Крем для области вокруг глаз',code:3,price:'43 BYN',urlProduct:'imagesShop/creamY.png',typeScin: 'Все типы кожи',  count:3, control:'Удалить'},
      {namePdoduct:'Бальзам для губ',code:4,price:'12 BYN', urlProduct:'imagesShop/balm.png',typeScin: 'Все типы кожи', count:15, control:'Удалить'},
      {namePdoduct:'Тонер для лица',code:5,price:'23 BYN', urlProduct:'imagesShop/toner.png',typeScin: 'Все типы кожи', count:6, control:'Удалить'},
      {namePdoduct:'Тоник для лица',code:6,price:'36 BYN', urlProduct:'imagesShop/tonic.png',typeScin: 'Чувствительная', count:17, control:'Удалить'},
      {namePdoduct:'Маска для лица',code:7,price:'45 BYN', urlProduct:'imagesShop/maskBut.png',typeScin: 'Комбинированная', count:11, control:'Удалить'},
      {namePdoduct:'Маска тканевая для лица',code:8,price:'6,6 BYN', urlProduct:'imagesShop/mask.png',typeScin: 'Все типы кожи', count:23, control:'Удалить'} ,
      {namePdoduct:'Пилинг для лица',code:9,price:'32 BYN', urlProduct:'imagesShop/piling.png',typeScin: 'Нормальная, жирная и комбинированная', count:18, control:'Удалить'},
      {namePdoduct:'Крем для рук',code:10,price:'8,6 BYN', urlProduct:'imagesShop/armCream.png',typeScin: 'Все типы кожи', count:14, control:'Удалить'}
    ];

    ReactDOM.render(
      React.createElement(Ishop,{label:labelText, header:headerArr,products:productsArr}), 
      document.getElementById('container') 
    );

