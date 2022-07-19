import React from 'react';

export default props => {

  return (
    <React.Fragment>
       <input type='checkbox' checked={props.checkInput} onChange={()=>props.setCheckInput(event.target.checked)} style={{marginRight: '10px'}} />
       <input type='text' value={props.valueInput} onChange={()=>props.setInputValue(event.target.value)} style={{marginRight: '10px'}} />
       <input type='button' value='Сброс' onClick={props.resAllInput}/>
    </React.Fragment>    
  );
};
