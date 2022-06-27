import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Ishop.css';

import Product from './Product';

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
    list: this.props.products,
    isSelected: null,
  };

  selectedProduct = (code) =>{
    this.setState({isSelected:code});
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

    var productList=this.state.list.map(element=>{
      return React.createElement(Product, {key:element.code,          
       nameProduct:element.namePdoduct,
       code:element.code,
       price:element.price,
       srcPict:element.urlProduct,
       typeScin:element.typeScin,
       count:element.count,
       control:element.control,
       isSelected:element.code===this.state.isSelected,
       cbSelectedProduct:this.selectedProduct,
       cbDeleteProduct:this.deleteProduct})
     });

    return DOM.div( {className:'Ishop'}, 
      DOM.div( {className:'LabelText'}, this.props.label ), 
      DOM.table({className:'TableProduct'},
      DOM.thead(null, DOM.tr({className:'TrTable'}, 
      DOM.th({className:"ThTable"},this.props.header.name), 
      DOM.th({className:"ThTable"},this.props.header.price),
      DOM.th({className:"ThTable"},this.props.header.url),
      DOM.th({className:"ThTable"},this.props.header.type),
      DOM.th({className:"ThTable"},this.props.header.count),
      DOM.th({className:"ThTable"},this.props.header.control),
      )),
      DOM.tbody(null, productList)),
  );

  }

}

export default Ishop;
