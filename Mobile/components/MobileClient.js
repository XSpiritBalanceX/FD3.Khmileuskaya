import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

import {clientEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      surName: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  editClient=(EO)=>{
    clientEvents.emit('editClient', this.props.info.id);
  };

  deleteClient=(EO)=>{
    clientEvents.emit('deleteClient', this.props.info.id);
  };

  /* componentDidUpdate = (oldProps, oldState) => {
    console.log("MobileClient id="+this.props.info.id+" componentDidUpdate");
    if ( this.props.info.balance!==this.state.info.balance )
      this.setState({info:this.props.info});
  }; */

  render() {
    console.log("MobileClient id="+this.state.info.id+" render");

    let statusCl=this.props.info.balance>0?'activ':'blocked';
    let colorStatus=statusCl==='activ'?'rgb(70, 174, 70)':'rgb(236, 67, 67)';
    
    return (
      <tr>
        <td>{this.props.info.surName}</td>
        <td>{this.props.info.firstName}</td>
        <td>{this.props.info.lastName}</td>
        <td>{this.props.info.balance}</td>
        <td style={{backgroundColor:colorStatus}}>{statusCl}</td>
        <td><input type='button' defaultValue='Редактировать' onClick={this.editClient}/></td>
        <td><input type='button' defaultValue='Удалить' onClick={this.deleteClient}/></td>
      </tr>
    );

  }


}

export default MobileClient;
