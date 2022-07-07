import React from 'react';
import PropTypes from 'prop-types';

import './SelectedCard.css';

class SelectedCard extends React.Component{

    static PropTypes={
        name:PropTypes.string.isRequired,
        price:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        count:PropTypes.number.isRequired,
    };

    state={

    };

    render(){
         return(
        <React.Fragment> <h3>Карточка товара</h3>
        <p>Наименование товара: {this.props.name}</p>
        <p>Цена товара: {this.props.price}</p>
        <p>Тип кожи: {this.props.type}</p>
        <p>Осталось {this.props.count} шт.</p>
        </React.Fragment>
    );
    }
   
}
export default SelectedCard;

