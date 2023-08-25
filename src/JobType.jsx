import React, { useState } from 'react';
import Description from './Description';
import Conditions from './Conditions';
import EmploymentExtra from './EmploymentExtra';
import './style.css'


function JobPage() {
  const [jobType, setJobType] = useState('freelance');


  return (
    <div>
       <div className='heading'><h1>New Job</h1></div>
      <div>
        <label className='optionSelect'>
          <input 
            type="radio" value="freelance" checked={jobType === 'freelance'} onChange={() => setJobType('freelance')}/>
          Freelance
        </label>
        <label className='optionSelect'>
          <input type="radio" value="employment" checked={jobType === 'employment'} onChange={() => setJobType('employment')}/>
          Employment
        </label>
      </div>
      <Description />
      <Conditions />
      {jobType === 'employment' && <EmploymentExtra />}
      <input type="submit" value="Submit" className="jobSubmit" />
    </div>
  );
}

export default JobPage;
