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
    selectedCard:null,
    workModel:1,
    listEdit:null,
    filterList:this.props.clients
  };

  componentDidMount(){
   clientEvents.addListener('editClient', this.editClient);
   clientEvents.addListener('deleteClient', this.deleteClient);
   cardEvents.addListener('editCard', this.editCard);
   cardEvents.addListener('canselEditCard', this.canselEditCard);
  };

  componentWillUnmount(){
    clientEvents.removeListener('editClient', this.editClient);
    clientEvents.removeListener('deleteClient', this.deleteClient);
    cardEvents.removeListener('editCard', this.editCard);
    cardEvents.removeListener('canselEditCard', this.canselEditCard);
  };

  editClient=(id)=>{
    this.setState({workModel:2, selectedCard:id});   
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
    this.setState({clientsList:copyArr, workModel:1, filterList:copyArr});
  };

  editCard=(newClient)=>{
    let editProductsList;    
    if(this.state.workModel===2){
      editProductsList= this.state.clientsList.map(product => {
      return product.id === newClient.id ? newClient : product;
    });
    }else if(this.state.workModel===3){
      editProductsList=[...this.state.clientsList, newClient];
    }
    let forFilter=editProductsList;
    this.setState({clientsList:editProductsList, 
      workModel:1, 
      filterList:forFilter, 
      selectedCard:null});
  };

  canselEditCard=()=>{
    this.setState({selectedCard:null, workModel:1})
  };
  
  //переменная для передачи данных в компонент Card
  editList=null;

  createNewClient=()=>{  
    let newID=Math.floor(Math.random()*300);
    this.state.clientsList.forEach(el=>{
      if(newID===el.id){
        newID=el.id*100;
      }
    });
   this.editList={id:newID,
    surName:'',
    firstName:'',
    lastName:'',
    balance:null};
    this.setState({workModel:3,selectedCard:this.editList.id });
  };

  setListClients=(EO)=>{
   this.setList(EO.target.name);
  };

  setList=(value)=>{
    if(value==this.state.showClient){
      return;
    }
    let clientsFilter=value==='all'?this.state.filterList:this.clienNewList(value);
    this.setState({showClient:value, selectedCard:null, clientsList:clientsFilter})
  };

  clienNewList=(value)=>{
    return value==='activ'?[...this.state.filterList].filter(it=>it.balance>0):[...this.state.filterList].filter(it=>it.balance<=0);
  }
  
  render() {

    console.log("MobileCompany render");

    const clientsCode=this.state.clientsList.map( client =>
      <MobileClient 
      key={client.id} 
      info={client} />
    );

    //если редакирование карточки-передаем уже существующие данные
    this.state.clientsList.forEach(el=>{
      if(el.id===this.state.selectedCard){
       this.editList=el;
      }
    }); 
    
    const cardProduct=(this.state.workModel===2 || this.state.workModel===3)?
    <Card key={this.editList.id}
     info={this.editList}
     workModel={this.state.workModel}/>:null;

    return (
      <div>
       <input type='button' defaultValue='Все' name='all' onClick={this.setListClients}/>
       <input type='button' defaultValue='Активные' name='activ' onClick={this.setListClients}/>
       <input type='button' defaultValue='Заблокированные' name='blocked' onClick={this.setListClients}/>
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
       <input type='button' defaultValue='Добавить клиента' name='newCl' onClick={this.createNewClient}/>
       <div >{cardProduct}</div>
      </div>
    );
  }
}

export default MobileCompany;
