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
    edit:PropTypes.string,
    isSelected:PropTypes.bool,
    cbSelectedProduct: PropTypes.func.isRequired,
    isMadeChange:PropTypes.bool,
    isEdit:PropTypes.bool,
    cbDeleteProduct:PropTypes.func.isRequired,

  }; 

  selectedProd=(EO)=>{
    let edit;
    let work;
     if(!this.props.isMadeChange){
       if(EO.target.value==='Изменить'){
        edit=true;
        work=1;
       }
       else{        
        work=2;
        edit=false;
       }
       var chosenCard={
        nameProduct:this.props.nameProduct,
        code:this.props.code,
        price:this.props.price,
        urlProduct:this.props.srcPict,
        typeScin:this.props.typeScin,
        count:this.props.count,
       }
     }
     if(this.props.isMadeChange){
      return;
     }
     this.props.cbSelectedProduct(this.props.code,edit, work, chosenCard)
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
          <input className='ButtCon' type='button' defaultValue={this.props.control} onClick={this.deleteProd} disabled={this.props.isMadeChange}/>
          <input className='ButtCon' name='change' type='button' defaultValue={this.props.edit} disabled={this.props.isMadeChange} />
          
        </td>
      </tr>        
    )
}
}
export default Product;