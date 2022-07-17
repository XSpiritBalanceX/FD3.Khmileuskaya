import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import {cardEvents} from './events';

class Card extends React.PureComponent {

    static propTypes = {
        info:PropTypes.shape({
              id: PropTypes.number.isRequired,
              surName: PropTypes.string.isRequired,
              firstName: PropTypes.string.isRequired,
              lastName: PropTypes.string.isRequired,
              balance: PropTypes.number,
            }),
        workModel:PropTypes.number.isRequired,
      };

      surNameRef=React.createRef();
      firstNameRef=React.createRef();
      lastNameRef=React.createRef();
      balanceRef=React.createRef();

      saveEdit=()=>{
        const newClient={...this.props.info,
          surName:this.surNameRef.current.value,
          firstName:this.firstNameRef.current.value,
          lastName:this.lastNameRef.current.value,
          balance:parseFloat(this.balanceRef.current.value)
        };
        cardEvents.emit('editCard', newClient);
      };

      canselEdit=()=>{
        this.surNameRef.current.value=this.props.info.surName;
        this.firstNameRef.current.value=this.props.info.firstName;
        this.lastNameRef.current.value=this.props.info.lastName;
        this.balanceRef.current.value=this.props.info.balance;
        cardEvents.emit('canselEditCard');
      };

    render(){
        console.log('Card render');
            return(<React.Fragment>
                    <h2>{this.props.workModel===2?'Редактирование клиента':'Добавить нового клиента'}</h2>
                    <div className='divInput'>
                        <label htmlFor='surName' className='labelInp'>Фамилия: </label>
                        <input name='surName' type='text' ref={this.surNameRef} className='InputProd' defaultValue={this.props.info.surName}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor='firstName' className='labelInp'>Имя: </label>
                        <input name='firstName' type='text' ref={this.firstNameRef} className='InputProd' defaultValue={this.props.info.firstName}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor='lastName' className='labelInp'>Отчество: </label>
                        <input name='lastName' type='text' ref={this.lastNameRef} className='InputProd' defaultValue={this.props.info.lastName}/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor='balance' className='labelInp'>Баланс: </label>
                        <input name='balance' type='text' ref={this.balanceRef} className='InputProd' defaultValue={this.props.info.balance}/>
                    </div>
                    <input type='button' defaultValue='Сохранить' onClick={this.saveEdit} className='saveButt'/>
                    <input type='button' defaultValue='Отменить' onClick={this.canselEdit} className='canselButt'/>
            </React.Fragment>)
        
    }

}

export default Card;