import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

import { withColorBackground } from './withColorBackground';

class DoubleButton extends React.Component {

  static propTypes = {
    caption1:PropTypes.string.isRequired,
    caption2:PropTypes.string.isRequired,
    cbPressed:PropTypes.func.isRequired,
  };

  clickButton=(EO)=>{
    this.props.cbPressed(EO.target.name)
  };
  

  render() {
    var rainbFrame = this.props.children;
    /* this.props.colors.forEach(el => {
      rainbFrame = (<div style={{border: "solid 10px " + el, padding: "10px"}}>
                {rainbFrame}
            </div>
        )
    }); */
    /* const answersCode=this.props.answers.map( v =>
      <VotesAnswer key={v.code}
        text={v.text} count={v.count} code={v.code}
        freeanswer={v.freeanswer} freeanswertext={this.state.freeanswertext}
        cbSelected={this.answerSelected}
        cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
        selectedAnswerCode={this.state.selectedAnswerCode}
        workMode={this.state.workMode}
      />
    ); */
    {/* <div className='VotesBlock'>
        <VotesQuestionWithBG question={this.props.question}/>
        <div className='Answers'>{answersCode}</div>
        {
          ((this.state.workMode==1)&&this.state.selectedAnswerCode) &&
          <input type='button' value='проголосовать' onClick={this.vote} />
        }
      </div>  */}

    /* let VotesQuestionWithBG=withColorBackground("cyan")(VotesQuestion); */

    return (
      <React.Fragment>
          <input type='button' defaultValue={this.props.caption1} name='1' onClick={this.clickButton}/>
         {rainbFrame}
       <input type='button' defaultValue={this.props.caption2} name='2' onClick={this.clickButton}/>  
        </React.Fragment>
    ) ;

  }

}

export default DoubleButton;
