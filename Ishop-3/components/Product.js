import React from 'react';
import PropTypes from 'prop-types';

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

      return (
        <tr style={{backgroundColor:this.props.isSelected? 'rgb(113, 188, 253)':'transparent'}} onClick={this.selectedProd}>
          <td className='TdTable'>
            <p className='PName'>{this.props.nameProduct}</p>
          </td>
          <td className='TdTable'>{this.props.price}</td>
          <td className='TdTable'>
            <img className='Img' src={this.props.srcPict} title={this.props.nameProduct} />
          </td>
          <td className='TdTable'>{this.props.typeScin}</td>
          <td className='TdTable'>{this.props.count}</td>
          <td className='TdTable'>
            <input className='ButtCon' type='button' value={this.props.control} onClick={this.deleteProd}/>
          </td>
        </tr>        
      )
  }

}

export default Product;
