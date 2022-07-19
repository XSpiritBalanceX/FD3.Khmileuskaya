import React, { useState} from 'react';

import Controls from "./Controls";
import List from './List';

export default props => {
    
    var [check, setCheckbox] = useState(false);
    var [defInp, setInputValue]= useState('');
  
    function resetAll(){
      setCheckbox(false);
      setInputValue('');
    };
  
    let newArrWords;
    if (defInp==''){
      newArrWords=props.listArr.slice();
     }
     else{
      newArrWords=[];
      props.listArr.forEach(el=>{
        if(el.includes(defInp)){
          newArrWords.push(el);
        }
      });
     }
     if(check){
      newArrWords.sort();
     }

  return (
    <React.Fragment>
      <Controls setCheckInput={setCheckbox} 
        setInputValue={setInputValue} 
        resAllInput={resetAll} 
        checkInput={check}
        valueInput={defInp}/>
      
        <List list={newArrWords}/>      
    </React.Fragment>
  );
};