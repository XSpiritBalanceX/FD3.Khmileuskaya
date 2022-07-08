import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    let resultArr=[];
    let regExp=/<br\s?\/?>/g;
    
    let newArr=this.props.text.split(regExp);
    
    newArr.forEach((elem, index, arr)=>{
      resultArr.push(elem);
      if(arr.length-1 !== index){
        resultArr.push(<br key={index}/>);
      }      
    });

    return (
      <div className='BR2JSX'>
        {resultArr} 
      </div>
    );

  }

}

export default BR2JSX;
