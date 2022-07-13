import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

  static propTypes = {
    caption1:PropTypes.string.isRequired,
    caption2:PropTypes.string.isRequired,
    cbPressed:PropTypes.func.isRequired,
  };

  clickButton=(EO)=>{
    this.props.cbPressed(EO.target.name);
  };
  

  render() {
    return (
      <React.Fragment>
         <input type='button' defaultValue={this.props.caption1} name='1' onClick={this.clickButton} className='inputButt'/>
         {this.props.children}
         <input type='button' defaultValue={this.props.caption2} name='2' onClick={this.clickButton} className='inputButt'/>  
        </React.Fragment>
    ) ;

  }

}

export default DoubleButton;
