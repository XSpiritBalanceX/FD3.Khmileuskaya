import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
    nameProduct:PropTypes.string.isRequired,
    code:PropTypes.number.isRequired,
    price:PropTypes.string.isRequired,
    srcPict:PropTypes.string.isRequired,
    typeScin:PropTypes.string.isRequired,
    count:PropTypes.number.isRequired,
    control:PropTypes.string.isRequired,
    isSelected:PropTypes.bool,
    cbSelectedProduct:PropTypes.func,
    cbDeleteProduct:PropTypes.func,
  };

  selectedProd = ()=>{
    this.props.cbSelectedProduct(this.props.code);
  };

  deleteProd = () =>{
    this.props.cbDeleteProduct(this.props.code);
  };

  render() {

    return DOM.tr({style:{backgroundColor:this.props.isSelected? 'rgb(113, 188, 253)':'transparent'},onClick:this.selectedProd},
      DOM.td({className:'TdTable'}, DOM.p({className:'PName'},this.props.nameProduct) ),
      DOM.td({className:'TdTable'}, this.props.price),
      DOM.td({className:'TdTable'}, DOM.img({className:'Img', src:this.props.srcPict, title:this.props.nameProduct})),
      DOM.td({className:'TdTable'}, this.props.typeScin),
      DOM.td({className:'TdTable'}, this.props.count),
      DOM.td({className:'TdTable'}, DOM.input({type:'button', value:this.props.control, onClick:this.deleteProd, className:'ButtCon'})),)

  }

}

export default Product;
