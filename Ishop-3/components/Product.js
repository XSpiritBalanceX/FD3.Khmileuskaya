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
    count:PropTypes.string.isRequired,
    control:PropTypes.string,
    isSelected:PropTypes.bool,
    cbSelectedProduct:PropTypes.func,
    cbDeleteProduct:PropTypes.func,
    disabled:PropTypes.bool.isRequired,
  }; 

  selectedProd = (EO)=>{ 
    if(this.props.disabled){
      EO.stopPropagation();
    EO.preventDefault();
  }
  else{
    var isEdit=false;  
    var workMod=null;
    var objCard={
      namePdoduct:this.props.nameProduct,
      code:this.props.code,
      price:this.props.price,
      urlProduct:this.props.srcPict,
      typeScin:this.props.typeScin,
      count:this.props.count,
    };
     if(EO.target.value=='Изменить'){
      isEdit=true;
      workMod=1;
     }
     else{
      workMod=2;
     }
     this.props.cbSelectedProduct(this.props.code, objCard, isEdit, workMod);
  }
  };

  deleteProd = () =>{
    this.props.cbDeleteProduct(this.props.code);
  };


  render() {

      return (
        <tr style={{backgroundColor:this.props.isSelected? 'rgb(113, 188, 253)':'transparent'}} onClick={this.selectedProd} >
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
            <input className='ButtCon' type='button' value={this.props.control} onClick={this.deleteProd} disabled={this.props.disabled}/>
            <input className='ButtCon' name='change' type='button' value='Изменить' disabled={this.props.disabled} />
            
          </td>
        </tr>        
      )
  }

}

export default Product;
