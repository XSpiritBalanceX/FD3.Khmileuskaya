import React from 'react';

let withRainbowFrame = colors => Component => props =>{
  let frame=<Component {...props} />;
  colors.forEach(el => {
    frame = (<div style={{border: "solid 10px " + el, padding: "10px", textAlign: 'center',}}>
              {frame}
          </div>
      )
  });
 return frame;
};

export default withRainbowFrame;
