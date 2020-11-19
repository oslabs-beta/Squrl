import React, {useState} from 'react';

interface props {
  number: number;
  value: string;
  dataType: string;
  empty: number;
  callback : any
}

const Fields: React.FC<props> = ({ number, value, dataType, empty, callback}) => {

  return (
    <div className={`geninput`} >
      <input onChange={callback} className={`${number}`} name={`input-${number}`} value={value} id="input" placeholder="Field Name"></input>
      <select id="dataType" placeholder="Data Type"><option>Data Type</option></select>
      <input id="empty" placeholder="% empty"></input><h3>%</h3>
    </div >
  )
}

export default Fields;