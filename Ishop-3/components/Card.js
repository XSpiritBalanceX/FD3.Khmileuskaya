import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends React.Component{

    static propTypes={
       id:PropTypes.number,
       name:PropTypes.string,
       price:PropTypes.string,
       url:PropTypes.string,
       type:PropTypes.string,
       count:PropTypes.string,
       workMod:PropTypes.number.isRequired,
       cbDisabled:PropTypes.func.isRequired,
       cbSaveEdit:PropTypes.func.isRequired,
       isCreated:PropTypes.bool,
    };

    state={
      idProd:this.props.id,
      nameProd:this.props.name,
      priceProd:this.props.price,
      urlProd:this.props.url,
      typeSc:this.props.type,
      countProd:this.props.count,
      workModel:this.props.workMod,//отображение карточек
      validName:null,
      validPrice:null,
      validURL:null,
      validType:null,
      validCount:null,
      disabledSave:false,//можно ли сохранить изменения
    };

    componentDidUpdate(oldProps, newProps){
        if(oldProps.id !== this.props.id || oldProps.workMod!==this.props.workMod){
            this.setState({idProd:this.props.id,
            nameProd:this.props.name,
            priceProd:this.props.price,
            urlProd:this.props.url,
            typeSc:this.props.type,
            countProd:this.props.count,
            workModel:this.props.workMod,/* 
            validName:null, 
            validPrice:null,
            validURL:null,
            validType:null,
            validCount:null, */
            disabledSave:false,})
        }
    };

    changeInput=(EO)=>{   
        this.validInputForm(EO.target.name, EO.target.value) ;
        this.props.cbDisabled(true);
    };

    validInputForm=(name, value)=>{
        let error;
        let regAlp=/^[a-z]*$/i;
        switch(name){
            case 'name': regAlp.test(value.toLowerCase()) || value===''?error=true:error=false;
              this.setState({nameProd:value, validName:error}); break;
            case 'price':isNaN(Number(value))||value===''? error=true:error=false;
              this.setState({priceProd:value, validPrice:error});break;
            case 'url': value===''?error=true:error=false;
              this.setState({urlProd:value, validURL:error}); break;
            case 'type': regAlp.test(value.toLowerCase()) || value===''?error=true:error=false;
              this.setState({typeSc:value, validType:error}); break; 
            case 'count': isNaN(Number(value))||value===''? error=true:error=false;
              this.setState({countProd:value, validCount:error}); break;
           }
           if(this.state.validName || this.state.validPrice || this.state.validURL || this.state.validType ||this.state.validCount){
            this.setState({disabledSave:true})
           }
           else{
            this.setState({disabledSave:false})
           }
    };


    saveEditCard=()=>{
      var editCard={
        code:this.state.idProd,
        namePdoduct:this.state.nameProd,
        price:this.state.priceProd,
        urlProduct:this.state.urlProd,
        typeScin:this.state.typeSc,
        count:this.state.countProd,
      };
      this.props.cbSaveEdit(editCard);
      this.props.cbDisabled(false);
    };

    canselEdit=()=>{
      this.setState({nameProd:this.props.name,
        priceProd:this.props.price,
        urlProd:this.props.url,
        typeSc:this.props.type,
        countProd:this.props.count,
        validName:null,
        validPrice:null,
        validURL:null,
        validType:null,
        validCount:null,
        disabledSave:false,});
        this.props.cbDisabled(false);
    };

    render(){      
        if(this.state.workModel===1 || this.state.workModel===3){
         var phrase=this.props.isCreated&&this.state.workModel===3?'Создание нового товара': 'Редактирование продукта';
        var idProdForm=this.props.isCreated&&this.state.workModel===3?null:<p className='labelInp'>ID: {this.props.id}</p>;
        var inpSaveForm=this.props.isCreated&&this.state.workModel===3?'Добавить':'Сохранить';
        return(<React.Fragment>
            <h2>{phrase}</h2>
            {idProdForm}
            <div className='flex'>
                   <label htmlFor='name' className='labelInp'>Название продукта</label> 
                   <input type='text' className='InputProd' name='name' value={this.state.nameProd} onChange={this.changeInput}/>                              
            <div className='error'>{this.state.validName||this.state.nameProd===''?'Заполните поле.Используйте кириллицу':null}
            </div>  
            </div>
            <div className='flex'>
              <label htmlFor='price' className='labelInp'>Цена продукта</label>
              <input type='text' className='InputProd' name='price' value={this.state.priceProd} onChange={this.changeInput}/>            
            <div className='error'>{this.state.validPrice||this.state.priceProd===''?'Заполните поле. Данные в виде чисел':this.state.validPrice?'Используйте цифры':null}</div>  
            </div>
            <div className='flex'>
              <label htmlFor='url' className='labelInp'>URL продукта</label>
              <input type='text' className='InputProd' name='url' value={this.state.urlProd} onChange={this.changeInput}/>            
            <div className='error'>{this.state.validURL||this.state.urlProd===''?'Заполните корректно поле':null}</div>  
            </div>
            <div className='flex'>
              <label htmlFor='type' className='labelInp'>Тип кожи</label>
              <input type='text' className='InputProd' name='type' value={this.state.typeSc} onChange={this.changeInput}/>            
            <div className='error'>{this.state.validType||this.state.typeSc===''?'Заполните поле.Используйте кириллицу':null}</div>  
            </div>
            <div className='flex'>
              <label htmlFor='count' className='labelInp'>Остаток продукта</label>
              <input type='text' className='InputProd' name='count' value={this.state.countProd} onChange={this.changeInput}/>            
            <div className='error'>{this.state.validCount||this.state.countProd===''?'Заполните поле. Данные в виде чисел':null}</div>  
            </div>
            <input type='button' className='saveButt' value={inpSaveForm} disabled={this.state.disabledSave} onClick={this.saveEditCard}/>
            <input type='button' className='canselButt' value='Отмена'onClick={this.canselEdit}/>
          </React.Fragment>
          );
        }
        else if(this.state.workModel===2){
            return(<React.Fragment> <h3>Карточка товара</h3>
        <p>Наименование товара: {this.props.name}</p>
        <p>Цена товара: {this.props.price}</p>
        <p>Тип кожи: {this.props.type}</p>
        <p>Осталось {this.props.count} шт.</p>
        </React.Fragment>)
        }
        /* else if(this.state.workModel===3){
          return (<React.Fragment>
            <h2>Добавить новый продукт</h2>
            <div className='flex'>
                   <label htmlFor='name' className='labelInp'>Название продукта</label> 
                   <input type='text' className='InputProd' name='name' value={this.state.nameProd} onChange={this.changeInput}/>                              
            <div className='error'>{!this.state.validName?null:'Используйте кириллицу'}</div>  
            </div>
            <div className='flex'>
              <label htmlFor='price' className='labelInp'>Цена продукта</label>
              <input type='text' className='InputProd' name='price' value={this.state.priceProd} onChange={this.changeInput}/>            
            <div className='error'>{!this.state.validPrice?null:'Используйте цифры'}</div>  
            </div>
            <div className='flex'>
              <label htmlFor='url' className='labelInp'>URL продукта</label>
              <input type='text' className='InputProd' name='url' value={this.state.urlProd} onChange={this.changeInput}/>            
            <div className='error'>{!this.state.validURL?null:'Поле не может быть пустым'}</div>  
            </div>
            <div className='flex'>
              <label htmlFor='type' className='labelInp'>Тип кожи</label>
              <input type='text' className='InputProd' name='type' value={this.state.typeSc} onChange={this.changeInput}/>            
            <div className='error'>{!this.state.validType?null:'Используйте кириллицу'}</div>  
            </div>
            <div className='flex'>
              <label htmlFor='count' className='labelInp'>Остаток продукта</label>
              <input type='text' className='InputProd' name='count' value={this.state.countProd} onChange={this.changeInput}/>            
            <div className='error'>{!this.state.validCount?null:'Используйте цифры'}</div>  
            </div>
            <input type='button' className='saveButt' value='Добавить' disabled={this.state.disabledSave} onClick={this.saveNewProduct}/>
            <input type='button' className='canselButt' value='Отмена'onClick={this.canselEdit}/>
          </React.Fragment>);
        } */
   }
}
export default Card;
