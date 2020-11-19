import React from 'react';

interface props {
  number: number;
}

const Fields: React.FC<props> = ({ number }) => {

  const logger = (e: React.ChangeEvent) => {
    console.log(e.target)
  }
  return (
    <div key={i}>
      <input value={el} placeholder="Field Name" onChange={(e) => handleChange(e, i)}></input>
      <select id="dataType" placeholder="Data Type"><option>Data Type</option></select>
      <div id="percentagediv">
        <input id="empty" value="0"></input><h3>% Empty</h3>
      </div>
    </div>
  )
}

export default Fields;

// onChange = { logger } id = {`input-${number}`}