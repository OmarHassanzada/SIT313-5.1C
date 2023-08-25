import React, { useState } from 'react';
import './style.css';

function EmploymentSpecific() {
  /* the following are defined through usestates for the future implementation of this form
  as suggested by the task sheet*/
  const [experience, setExperience] = useState(null);;
  const [duration, setDuration] = useState(null);;

  return (
    <div className="employment-section">
    <div className='heading'><h1>Experience</h1></div>
    <form style={{marginBottom: "30px"}}>
      <label style={{ marginRight: "15px", fontWeight: "bold"}}>Experienced In</label>
      <input className='input' type="text" value={experience}/*replace later*/ />
    </form>
    <form style={{marginBottom: "30px"}}>
      <label style={{ marginRight: "50px", fontWeight: "bold"}}>For at least</label>
      <input className='input' type="text" value={duration}/*replace later*/ />
    </form>
</div>

  );
}

export default EmploymentSpecific;

