import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

   splitMulti=(str, tokens)=>{
    var tempChar = tokens[0]; // We can use the first token as a temporary join character
    for(var i = 1; i < tokens.length; i++){
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
};

  render() {
    let resultArr=[];
    let regExp=/<br\s?\/?>/g;
    
    let newArr=this.props.text.split(regExp);

    newArr.forEach((elem, index)=>{
      resultArr.push(elem);
      resultArr.push(<br key={index}/>);
    });

    return (
      <div className='BR2JSX'>
        {resultArr} 
      </div>
    );

  }

}

export default BR2JSX;
