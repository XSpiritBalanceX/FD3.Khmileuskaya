import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends React.Component{
 
  static propTypes={
    code:PropTypes.number.isRequired, 
     nameProduct:PropTypes.string.isRequired,
     price:PropTypes.string.isRequired,
     urlProduct:PropTypes.string.isRequired,
     typeScin:PropTypes.string.isRequired,
     count:PropTypes.string.isRequired,
     workModel:PropTypes.number.isRequired,
     cbMadeChange:PropTypes.func,
     isCreated:PropTypes.bool,
     cbCanselEdit:PropTypes.func.isRequired,
     cbCanselSaveNewProduct:PropTypes.func.isRequired,
     cbSaveNewProduct:PropTypes.func.isRequired,
     cbSaveEdit:PropTypes.func.isRequired,
  }

  state={
    code:this.props.code,
    nameProduct:this.props.nameProduct,
    price:this.props.price,
    urlProduct:this.props.urlProduct,
    typeScin:this.props.typeScin,
    count:this.props.count,
    changeName:false,
    changePrice:false,
    changeUrl:false,
    changeType:false,
    changeCount:false,
    workModel:this.props.workModel,

    errText: {
      nameProduct: '',
      price: '',
      urlProduct:'',
      typeScin:'',
      count: '',
  }
  };

  componentDidUpdate(oldProps, oldState){
    if(oldProps.code!==this.props.code){
      this.setState({code:this.props.code,
        nameProduct:this.props.nameProduct,
        price:this.props.price,
        urlProduct:this.props.urlProduct,
        typeScin:this.props.typeScin,
        count:this.props.count,
        workModel:this.props.workModel})
    }
  };

  changeInput=(EO)=>{
    this.checkField(EO.target.name, EO.target.value);
    this.props.cbMadeChange(true);    
  };

  checkField=(name, value)=>{
    var validValue=true;
    switch(name){
      case 'nameProduct':validValue=this.checkString(value);
      this.props.isCreated?this.setState({changeName:true}):null;
        break;
      case 'typeScin': validValue=this.checkString(value);
      this.props.isCreated?this.setState({changeType:true}):null;
       break;
      case 'price':validValue=this.checkNumber(value);
      this.props.isCreated?this.setState({changePrice:true}):null;
       break;
      case 'count': validValue=this.checkNumber(value);
        this.props.isCreated?this.setState({changeCount:true}):null;
         break;
      case 'urlProduct': validValue=this.checkUrl(value);
      this.props.isCreated?this.setState({changeUrl:true}):null;
       break;
    }
    var message=value&&validValue?'':'Поле заполнено неверно';
    this.setState({[name]:value, errText: {...this.state.errText, [name]: message}});
  };

  checkString=(value)=>{
    let regAlp=/^[а-яё]*$/i;
    return regAlp.test(value.toLowerCase());
  };

  checkNumber=(value)=>{
    return !isNaN(Number(value));
  };

  checkUrl=(value)=>{
    let reg = /(.jpg|.png|jpeg)$/;
    return reg.test(value);
  };

  focusInput=(EO)=>{
   EO.target.value='';
  }

  saveCard=()=>{
    var newProduct={
      code:this.state.code,
      nameProduct:this.state.nameProduct,
      price:this.state.price,
      urlProduct:this.state.urlProduct,
      typeScin:this.state.typeScin,
      count:this.state.count
    };
    this.props.cbMadeChange(false);
    if(this.props.isCreated){
      newProduct.control='Удалить';
      newProduct.edit='Изменить';
      return this.props.cbSaveNewProduct(newProduct);
    }
    this.props.cbSaveEdit(newProduct);
  };

  canselEdit=()=>{
    this.setState()
    this.props.cbMadeChange(false);
    this.props.cbCanselEdit();
    this.setState({code:this.props.code,
      nameProduct:this.props.nameProduct,
      price:this.props.price,
      urlProduct:this.props.urlProduct,
      typeScin:this.props.typeScin,
      count:this.props.count});
    if(this.props.isCreated){
      this.props.cbCanselSaveNewProduct();
    }
  };


  render(){
    var canSave = !Object.values(this.state.errText).every(item => {
      return item === '';
    });
    if(this.props.workModel===0){
       return null;
    }
    if(this.props.workModel===1){
      return(<React.Fragment>
        <h2>Изменение в продукт</h2>
        <p className='labelInp'>ID: {this.props.code}</p>
        <div className='flex'>
               <label htmlFor='name' className='labelInp'>Название продукта</label> 
               <input type='text' className='InputProd' name='nameProduct' value={this.state.nameProduct} onChange={this.changeInput} onFocus={this.focusInput} />                              
        <div className='error'>{this.state.errText.nameProduct}
        </div>  
        </div>
        <div className='flex'>
          <label htmlFor='price' className='labelInp'>Цена продукта</label>
          <input type='text' className='InputProd' name='price' value={this.state.price} onChange={this.changeInput} onFocus={this.focusInput}/>            
        <div className='error'>{this.state.errText.price}</div>  
        </div>
        <div className='flex'>
          <label htmlFor='url' className='labelInp'>URL продукта</label>
          <input type='text' className='InputProd' name='urlProduct' value={this.state.urlProduct} onChange={this.changeInput} onFocus={this.focusInput}/>            
        <div className='error'>{this.state.errText.urlProduct}</div>  
        </div>
        <div className='flex'>
          <label htmlFor='type' className='labelInp'>Тип кожи</label>
          <input type='text' className='InputProd' name='typeScin' value={this.state.typeScin} onChange={this.changeInput} onFocus={this.focusInput}/>            
        <div className='error'>{this.state.errText.typeScin}</div>  
        </div>
        <div className='flex'>
          <label htmlFor='count' className='labelInp'>Остаток продукта</label>
          <input type='text' className='InputProd' name='count' value={this.state.count} onChange={this.changeInput} onFocus={this.focusInput}/>            
        <div className='error'>{this.state.errText.count}</div>  
        </div>
        <input type='button' className='saveButt' value='Сохранить' disabled={canSave} onClick={this.saveCard}/>
        <input type='button' className='canselButt' value='Отмена'onClick={this.canselEdit}/>
      </React.Fragment>)
    }
    if(this.props.workModel===2){
      return(<React.Fragment> <h3>Карточка товара</h3>
      <p>Наименование товара: {this.props.nameProduct}</p>
      <p>Цена товара: {this.props.price}</p>
      <p>Тип кожи: {this.props.typeScin}</p>
      <p>Осталось {this.props.count} шт.</p>
      </React.Fragment>)
    }
    if(this.props.workModel===3){
      return (<React.Fragment>
        <h2>Создание нового товара</h2>
        <div className='flex'>
               <label htmlFor='name' className='labelInp'>Название продукта</label> 
               <input type='text' className='InputProd' name='nameProduct' value={this.state.nameProduct} onChange={this.changeInput} />                              
        <div className='error'>{!this.state.changeName?'Введите данные используя кириллицу':this.state.errText.nameProduct}
        </div>  
        </div>
        <div className='flex'>
          <label htmlFor='price' className='labelInp'>Цена продукта</label>
          <input type='text' className='InputProd' name='price' value={this.state.price} onChange={this.changeInput} />            
        <div className='error'>{!this.state.changePrice?'Заполните поле. Данные в виде чисел':this.state.errText.price}</div>  
        </div>
        <div className='flex'>
          <label htmlFor='url' className='labelInp'>URL продукта</label>
          <input type='text' className='InputProd' name='urlProduct' value={this.state.urlProduct} onChange={this.changeInput} />            
        <div className='error'>{!this.state.changeUrl?'Заполните корректно поле':this.state.errText.urlProduct}</div>  
        </div>
        <div className='flex'>
          <label htmlFor='type' className='labelInp'>Тип кожи</label>
          <input type='text' className='InputProd' name='typeScin' value={this.state.typeScin} onChange={this.changeInput} />            
        <div className='error'>{!this.state.changeType?'Заполните поле.Используйте кириллицу':this.state.errText.typeScin}</div>  
        </div>
        <div className='flex'>
          <label htmlFor='count' className='labelInp'>Остаток продукта</label>
          <input type='text' className='InputProd' name='count' value={this.state.count} onChange={this.changeInput} />            
        <div className='error'>{!this.state.changeCount?'Заполните поле. Данные в виде чисел':this.state.errText.count}</div>  
        </div>
        <input type='button' className='saveButt' value='Добавить' disabled={canSave} onClick={this.saveCard} />
        <input type='button' className='canselButt' value='Отмена'onClick={this.canselEdit}/>
      </React.Fragment>)
    }
  }

}
export default Card;