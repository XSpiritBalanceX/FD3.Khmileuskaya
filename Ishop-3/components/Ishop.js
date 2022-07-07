import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Product from './Product.js'
import EditCard from './EditCard.js'
import SelectedCard from './SelectedCard.js'

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
      )   
  };

  state = {
    list: this.props.products,//список продуктов
    isSelected: null,//выбран товар или нет
    cardSelected:null,//карточка выбранного товара
    isEdit:null,//изменяется ли товар
  };

  selectedProduct = (code, objProd, isE) =>{
    this.setState({isSelected:code, cardSelected:objProd, isEdit:isE});
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
      />
    );

    //карточка просмотра продукта
     var cardProduct=(!(this.state.isEdit) && this.state.cardSelected)?<SelectedCard
       name={this.state.cardSelected.name}
       price={this.state.cardSelected.price}
       type={this.state.cardSelected.price}
       count={this.state.cardSelected.count}/>:null;
       //карточка изменения продукта
    var editCard=(this.state.isEdit)?<EditCard 
       id={this.state.cardSelected.code}
       name={this.state.cardSelected.name}
       price={this.state.cardSelected.price}
       url={this.state.cardSelected.url}
       type={this.state.cardSelected.type}
       count={this.state.cardSelected.count}/>:null;

    return (
      <div className='Ishop'>
        <div className='LabelText'>{this.props.label}</div>      
        <div className='buttNewProd'>        
          <input type='button' className='butNewP' value='Новый продукт'/> 
        </div> 
        <div className='infoProduct'>
          {editCard}  
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
