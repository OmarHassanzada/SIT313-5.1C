import React, { useState } from 'react';
import './style.css';

function Conditions() {
  /* the following are defined through usestates for the future implementation of this form
  as suggested by the task sheet*/
  const [length, setLength] = useState(null);;
  const [min, setMin] = useState(null);;
  const [max, setMax] = useState(null);;
  const [hours, setHours] = useState(null);;

  return (
    <div className="project-section">
    <div className='heading'><h2>Project Conditions</h2></div>
      <form style={{marginBottom: "30px"}}>
        <label style={{ marginRight: "10px", fontWeight: "bold"}}>Project Length</label>
        <input className='input' type="text" value={length}/*replace later*/ />
      </form>
      <div style={{marginBottom: "30px"}} className="payment-inputs">
        <form>
          <label style={{ marginRight: "10px", fontWeight: "bold"}}>Min Payment</label>
          <input className='input' type="text" value={min}/*replace later*/ />
        </form>
        <form>
          <label style={{ marginRight: "10px", fontWeight: "bold"}}>Max Payment</label>
          <input className='input' type="text" value={max}/*replace later*/ />
        </form>
      </div>
      <form style={{marginBottom: "30px"}}>
        <label style={{ marginRight: "10px", fontWeight: "bold"}}>Working Hours</label>
        <input className='input' type="text" alue={hours}/*replace later*/ />
      </form>
  </div>

  );
}

export default Conditions;
