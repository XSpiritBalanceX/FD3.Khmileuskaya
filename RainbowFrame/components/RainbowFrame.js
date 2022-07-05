import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';


class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(
      PropTypes.string.isRequired),
};

render() {

    var rainbFrame = this.props.children;

    this.props.colors.forEach(el => {
      rainbFrame = (<div style={{border: "solid 10px " + el, padding: "10px"}}>
                {rainbFrame}
            </div>
        )
    });

    return (
        <React.Fragment>
            {rainbFrame}
        </React.Fragment>
    );
}

}

export default RainbowFrame;
