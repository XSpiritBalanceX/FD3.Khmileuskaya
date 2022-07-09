﻿import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Product from './Product.js'
import Card from './Card.js'

class Ishop extends React.Component {

  static propTypes = {
    label: PropTypes.string.isRequired, 
      header:PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
        control:PropTypes.string.isRequired,
      }),
      products:PropTypes.arrayOf(
        PropTypes.shape({
          namePdoduct: PropTypes.string.isRequired,
          code: PropTypes.number.isRequired,
          price: PropTypes.string.isRequired,
          urlProduct: PropTypes.string.isRequired,
          typeScin: PropTypes.string,
          count: PropTypes.number.isRequired,
          control: PropTypes.string.isRequired,
        })
      ),
      startWorkModel:PropTypes.number.isRequired  
  };

  state = {
    list: this.props.products,//список продуктов
    isSelected: null,//выбран товар или нет
    cardSelected:null,//карточка выбранного товара
    isEdit:null,//изменяется ли товар
    workModel:this.props.startWorkModel,//отображение карточек
    disabledButton:false,//можно ли кликать по кнопкам
  };

  selectedProduct = (code, objProd, isE, workMod) =>{
    this.setState({isSelected:code, cardSelected:objProd, isEdit:isE, workModel: workMod});
  };

  deleteProduct = (code) =>{
    var copyArr=this.state.list.slice();
    var inDelElem;
    var questAbDel;
    copyArr.forEach((el,index)=>{
      if (el.code===code){
        inDelElem=index; 
        questAbDel=confirm(`Вы действительно хотите удалить продукт "${el.namePdoduct}" из каталога?`)       
      }      
    });
    if(questAbDel){
      copyArr.splice(inDelElem,1);
      this.setState({list:copyArr});
    }
  };

  disabledBut=(boolValue)=>{
    this.setState({disabledButton:boolValue});
  }



  render() {

    const productList=this.state.list.map( el =>
      <Product key={el.code}
        nameProduct={el.namePdoduct} 
        code={el.code}
        price={el.price}
        srcPict={el.urlProduct}
        typeScin={el.typeScin }
        count={el.count}
        control={el.control}
        isSelected={el.code===this.state.isSelected}
        cbSelectedProduct={this.selectedProduct}
        cbDeleteProduct={this.deleteProduct}
        disabled={this.state.disabledButton}
      />
    );

    //карточка продукта
     var cardProduct=(this.state.cardSelected)?<Card
      id={this.state.cardSelected.code} 
     name={this.state.cardSelected.name}
     price={this.state.cardSelected.price}
     url={this.state.cardSelected.url}
     type={this.state.cardSelected.type}
     count={this.state.cardSelected.count}
     workMod={this.state.workModel}
     cbDisabled={this.disabledBut}/>:null;

    return (
      <div className='Ishop'>
        <div className='LabelText'>{this.props.label}</div>      
        <div className='buttNewProd'>        
          <input type='button' className='butNewP' value='Новый продукт' disabled={this.state.disabledButton}/> 
        </div> 
        <div className='infoProduct'>  
         {cardProduct}
         </div>       
        <table className='TableProduct'>
          <thead>
            <tr className='TrTable'>
              <th className='ThTable'>{this.props.header.name}</th>
              <th className='ThTable'>{this.props.header.price}</th>
              <th className='ThTable'>{this.props.header.url}</th>
              <th className='ThTable'>{this.props.header.type}</th>
              <th className='ThTable'>{this.props.header.count}</th>
              <th className='ThTable'>{this.props.header.control}</th>
            </tr>
          </thead>
          <tbody>{productList}</tbody>
        </table>
      </div>
    );

  }

}

export default Ishop;
