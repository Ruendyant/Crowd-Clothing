import React from 'react';

import './forminput_component.scss';

const FormInput = ({handlechange, label, ...otherprops}) => (
  <div className="group">
    <input className="form-input" onChange={handlechange} {...otherprops} />
    {
      label ? 
      <label className={`form-input-label ${otherprops.value.length ? "shrink" : ""}`} >
        {label}
      </label> 
      : null
    }
  </div>
)

export default FormInput;