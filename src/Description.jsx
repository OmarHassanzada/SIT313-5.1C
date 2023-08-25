import React, { useState } from 'react';
import './style.css'

function Description() {
  /* the following are defined through usestates for the future implementation of this form
  as suggested by the task sheet*/
  const [position, setPosition] = useState(null);
  const [jobDesc, setJobDescr] = useState(null);;
  const [skillset, setSkills] = useState(null);

  return (
    <div className="job-section">
      <div className='heading'><h2>Describe your job</h2></div>
        <form style={{marginBottom: "30px"}}>
          <label style={{ marginRight: "20px", fontWeight: "bold" }}>Title/Position</label>
          <input className='input' type="text" value={position} /*replace later*/ />
        </form>
        <form style={{marginBottom: "30px"}}>
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>Job Description</label>
          <input className='input' type="text" value={jobDesc} /*replace later*/ />
        </form>
        <form style={{marginBottom: "30px"}}>
          <label style={{ marginRight: "90px", fontWeight: "bold" }}>Skills</label>
          <input className='input' type="text" value={skillset} /*replace later*/ />
        </form>
      <p className="description_hint">
        Developers will find your job based on the skills you added here.
      </p>
    </div>
  );
}

export default Description;
