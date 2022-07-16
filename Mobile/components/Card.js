import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import {cardEvents} from './events';

class Card extends React.PureComponent {

    static propTypes = {
        info:PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              surName: PropTypes.string.isRequired,
              firstName: PropTypes.string.isRequired,
              lastName: PropTypes.string.isRequired,
              balance: PropTypes.number.isRequired,
            })
          ),
        workModel:PropTypes.number.isRequired,
      };


    render(){
        if(this.props.workModel===2){
            return(<React.Fragment>
                    sdevsrgrdfbgdfbt
            </React.Fragment>)
        }
    }

}

export default Card;