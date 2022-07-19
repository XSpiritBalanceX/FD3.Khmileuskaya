import React from 'react';
import './List.css';

export default props => {

    let wordList=props.list.map( el =>
        <p key={[el]}>{el}</p> );
    
  return (
    <div className='divLict'>
      {wordList}
    </div>
  );
};
