import React from 'react';
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
          nameProduct: PropTypes.string.isRequired,
          code: PropTypes.number.isRequired,
          price: PropTypes.string.isRequired,
          urlProduct: PropTypes.string.isRequired,
          typeScin: PropTypes.string,
          count: PropTypes.string.isRequired,
          control: PropTypes.string.isRequired,
          edit:PropTypes.string.isRequired,
        })
      ),
      startWorkModel:PropTypes.number.isRequired  
  };

  state = {
    list: this.props.products,//список продуктов
    isSelected: null,//выбран товар или нет
    cardSelected:null,//карточка выбранного товара
    isEdit:false,//изменяется ли товар
    workModel:this.props.startWorkModel,//отображение карточек
    isMadeChange:false,//вносятся ли изменения
    isCreated:false,//создается ли новый продукт
  };

  selectedProduct=(code, edit, work, product)=>{
    this.setState({isSelected:code, 
      isEdit:edit, 
      workModel:work, 
      cardSelected:{...product}, 
      isCreated:false})
  };

  deleteProduct = (code) =>{
    var copyArr=this.state.list.slice();
    var inDelElem;
    var questAbDel;
    copyArr.forEach((el,index)=>{
      if (el.code===code){
        inDelElem=index; 
        questAbDel=confirm(`Вы действительно хотите удалить продукт "${el.nameProduct}" из каталога?`)       
      }      
    });
    if(questAbDel){
      copyArr.splice(inDelElem,1);
      this.setState({list:copyArr,cardSelected:null, isEdit:false, isSelected:null});
    }
  };
  componentDidUpdate(oldProps, oldState){
     if(oldState.list.length!==this.state.list.length){
      this.setState({cardSelected:null, workModel:0, })
     }
  }

  createNewProduct=()=>{
    var newCreatProd={code:this.state.list.length+3,
      nameProduct:'',
      price:'',
      urlProduct:'',
      typeScin:'',
      count:'',
    };
      this.setState({isCreated:true,  
        workModel:3, 
        cardSelected:newCreatProd, 
        isSelected:null});
  };

  madeChange=(value)=>{
    this.setState({isMadeChange:value});
  };

  canselEdit=()=>{
    this.setState({isEdit:false, 
      workModel:0, isSelected:null});
  };

  canselSaveNewProduct=()=>{
    this.setState({isSelected:null, 
      cardSelected:null, 
      isCreated:false, 
      workModel:0});
  };

  saveNewProduct=(newProduct)=>{
    this.setState({list:[...this.state.list, newProduct],
    isSelected:null,
    cardSelected:{...newProduct},
    isEdit:false,
    isCreated:false,
    isMadeChange:false,
    workModel:0});
  };

  saveEdit=(newProduct)=>{
    var newProductsList = this.state.list.map(product => {
      return product.code === newProduct.code ? newProduct : product;
    });
    this.setState({list:newProductsList,
      isEdit:false,
      isSelected:newProduct.code,
      cardSelected:newProduct,
      isMadeChange:false});
      if(this.state.isSelected){
        this.setState({workModel:2});
      }
      else{
        this.setState({workModel:0});
      }
  };

  render() {
    const productList=this.state.list.map( el =>
      <Product key={el.code}
        nameProduct={el.nameProduct} 
        code={el.code}
        price={el.price}
        srcPict={el.urlProduct}
        typeScin={el.typeScin }
        count={el.count}
        control={el.control}
        edit={el.edit}
        isSelected={el.code===this.state.isSelected}
        cbSelectedProduct={this.selectedProduct}
        isMadeChange={this.state.isMadeChange}
        isEdit={this.state.isEdit}
        cbDeleteProduct={this.deleteProduct}
      />
    );

    //карточка продукта
     var cardProduct=(this.state.cardSelected||this.state.isEdit||this.state.workModel===3)?<Card
      code={ this.state.cardSelected.code} 
     nameProduct={this.state.cardSelected.nameProduct}
     price={this.state.cardSelected.price}
     urlProduct={this.state.cardSelected.urlProduct}
     typeScin={this.state.cardSelected.typeScin}
     count={this.state.cardSelected.count}
     workModel={this.state.workModel}
     cbMadeChange={this.madeChange}
     isCreated={this.state.isCreated}
     cbCanselEdit={this.canselEdit}
     cbCanselSaveNewProduct={this.canselSaveNewProduct}
     cbSaveNewProduct={this.saveNewProduct}
     cbSaveEdit={this.saveEdit}/>:null;

     

    return (
      <div className='Ishop'>
        <div className='LabelText'>{this.props.label}</div>           
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
        <div className='buttNewProd'>        
         <input type='button' className='butNewP' value='Новый продукт'  onClick={this.createNewProduct} disabled={this.state.isMadeChange}/>
         
        </div> 
        <div className='infoProduct'>  
         {cardProduct}
         </div>  
      </div>
    );}

}

export default Ishop;