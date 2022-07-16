import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './Card'
import {clientEvents, cardEvents} from './events';

import './MobileCompany.css';



class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        surName: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clientsList: this.props.clients,
    showClient:'all',
    isSelected:null,
    workModel:1,
  };

  componentDidMount(){
   clientEvents.addListener('editClient', this.editClient);
   clientEvents.addListener('deleteClient', this.deleteClient);
  };

  componentWillUnmount(){
    clientEvents.removeListener('editClient', this.editClient);
    clientEvents.removeListener('deleteClient', this.deleteClient);
  };

  editClient=(id)=>{
    this.setState({workModel:2})

  };

  deleteClient=(id)=>{
    let copyArr=this.state.clientsList.slice();
    let indexDel;
    copyArr.forEach((el, index)=>{
      if(el.id===id){
        indexDel=index;
      }
    });
    copyArr.splice(indexDel,1);
    this.setState({clientsList:copyArr, workModel:1});
  };
  /* 
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
 
  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  }; */
  /* <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
        <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
      </div> */
  
  render() {

    console.log("MobileCompany render");

    const clientsCode=this.state.clientsList.map( client =>
      <MobileClient 
      key={client.id} 
      info={client} 
      isSelected={client.code===this.state.isSelected}/>
    );

    const cardProduct=(this.state.workModel===2 || this.state.workModel===3)?
    <Card key={this.state.clientsList.id}
     info={this.state.clientsList}
     workModel={this.state.workModel}/>:null;

    return (
      <div>
       <input type='button' defaultValue='Все' name='all'/>
       <input type='button' defaultValue='Активные' name='activ'/>
       <input type='button' defaultValue='Заблокированные' name='forbid'/>
       <table className='TableMobilCompany'>
        <thead>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Баланс</th>
            <th>Статус</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>{clientsCode}</tbody>
       </table>
       <input type='button' defaultValue='Добавить клиента' name='newCl'/>
       <div>{cardProduct}</div>
      </div>
    );

  }


}

export default MobileCompany;
