import React from 'react';

const Exports = () => {
  return (
    <div>
      <div id="rowsfield">
        <h2># Of Rows</h2>
        <input placeholder="1"></input>
      </div>
      <div id="tablefields">
        <h2>Table Name</h2>
        <input placeholder="Table One"></input>
      </div>
      <div>
        <button id="duplicate">Duplicate Table</button>
      </div>
      <div id="formatinput">
        <h2>Format:</h2>
        <select id="formatoption" placeholder=" Select"><option>Select</option></select>
      </div>
      <div id="download">
        <button>Download Data</button>
      </div>
    </div >
  )
}

export default Exports;