import React from 'react';

const Exports = () => {
    return (
    <div>
      <h2># Of Rows</h2>    
       <input placeholder="1"></input>
      <h2>Table Name</h2>
        <input placeholder="Table One"></input>
        <button>Duplicate Table</button>
      <h2>Format:</h2>
      <select placeholder="Select"><option>Select</option></select>
      <button>Download Data</button>
     </div>
    )
}

export default Exports;