import React from 'react';
import PropTypes from 'prop-types';

import './EditCard.css';

class EditCard extends React.Component{

    static PropTypes={
       id:PropTypes.string.isRequired,
       name:PropTypes.string.isRequired,
       price:PropTypes.string.isRequired,
       url:PropTypes.string.isRequired,
       type:PropTypes.string.isRequired,
       count:PropTypes.number.isRequired,
    };

    state={
      idProd:this.props.id,
      nameProd:this.props.name,
      priceProd:this.props.price,
      urlProd:this.props.url,
      typeSc:this.props.type,
      countProd:this.props.count,
    };

    componentDidUpdate(oldProps, newProps){
        if(oldProps.id !== this.props.id){
            this.setState({idProd:this.props.id,
            nameProd:this.props.name,
            priceProd:this.props.price,
            urlProd:this.props.url,
            typeSc:this.props.type,
            countProd:this.props.count})
        }
    }

    render(){
        return(
            <React.Fragment>
            <h2>Редактирование продукта</h2>
            <p className='labelInp'>ID: {this.props.id}</p>
            <label htmlFor='name' className='labelInp'>Название продукта</label>
            <input type='text' className='InputProd' name='name' value={this.state.nameProd}/><br/>
            <label htmlFor='price' className='labelInp'>Цена продукта</label>
            <input type='text' className='InputProd' name='price' value={this.state.priceProd}/><br/>
            <label htmlFor='url' className='labelInp'>URL продукта</label>
            <input type='text' className='InputProd' name='url' value={this.state.urlProd}/><br/>
            <label htmlFor='type' className='labelInp'>Тип кожи</label>
            <input type='text' className='InputProd' name='type' value={this.state.typeSc}/><br/>
            <label htmlFor='count' className='labelInp'>Остаток продукта</label>
            <input type='text' className='InputProd' name='count' value={this.state.countProd}/><br/>
            <input type='button' className='saveButt' value='Сохранить'/>
            <input type='button' className='canselButt' value='Отмена'/>
          </React.Fragment>
   );
   }
}
export default EditCard;