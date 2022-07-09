import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends React.Component{

    static propTypes={
       id:PropTypes.number.isRequired,
       name:PropTypes.string.isRequired,
       price:PropTypes.string.isRequired,
       url:PropTypes.string.isRequired,
       type:PropTypes.string.isRequired,
       count:PropTypes.number.isRequired,
       workMod:PropTypes.number.isRequired,
       cbDisabled:PropTypes.func.isRequired,
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
      disabledSave:false,
    };

    componentDidUpdate(oldProps, newProps){
        if(oldProps.id !== this.props.id || oldProps.workMod!==this.props.workMod){
            this.setState({idProd:this.props.id,
            nameProd:this.props.name,
            priceProd:this.props.price,
            urlProd:this.props.url,
            typeSc:this.props.type,
            countProd:this.props.count,
            workModel:this.props.workMod,
            validName:null, 
            validPrice:null,
            validURL:null,
            validType:null,
            validCount:null,
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
        let regNumb=/^[0-9]*$/i;
        switch(name){
            case 'name': regAlp.test(value.toLowerCase()) || value===''?error=true:error=false;
              this.setState({nameProd:value, validName:error}); break;
            case 'price': !regNumb.test(value) || value===''?error=true:error=false;
              this.setState({priceProd:value, validPrice:error});break;
            case 'url': value===''?error=true:error=false;
              this.setState({urlProd:value, validURL:error}); break;
            case 'type': regAlp.test(value.toLowerCase()) || value===''?error=true:error=false;
              this.setState({typeSc:value, validType:error}); break; 
            case 'count': !regNumb.test(value) || value===''?error=true:error=false;
              this.setState({countProd:value, validCount:error}); break;
           }
           if(this.state.validName || this.state.validPrice || this.state.validURL || this.state.validType ||this.state.validCount){
            this.setState({disabledSave:true})
           }
           else{
            this.setState({disabledSave:false})
           }
           
    };

    render(){
        if(this.state.workModel===2){
        return(<React.Fragment>
            <h2>Редактирование продукта</h2>
            <p className='labelInp'>ID: {this.props.id}</p>
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
            <input type='button' className='saveButt' value='Сохранить' disabled={this.state.disabledSave}/>
            <input type='button' className='canselButt' value='Отмена'/>
          </React.Fragment>
          );
        }
        else if(this.state.workModel===3){
            return(<React.Fragment> <h3>Карточка товара</h3>
        <p>Наименование товара: {this.props.name}</p>
        <p>Цена товара: {this.props.price}</p>
        <p>Тип кожи: {this.props.type}</p>
        <p>Осталось {this.props.count} шт.</p>
        </React.Fragment>)
        }
            
   
   }
}
export default Card;
