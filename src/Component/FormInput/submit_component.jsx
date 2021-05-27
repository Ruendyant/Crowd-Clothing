import React from 'react';

import "./submit_styles.scss";

const SubmitButton = ({children,isGoogleIsGood,inverted, ...otherprops}) => (
  <button className={`${inverted ? 'inverted' : ""} 
  ${isGoogleIsGood ? 'googleapi' : 'none'}  
  custom-button`} 
  {...otherprops}
  >{children}</button>
)

export default SubmitButton;