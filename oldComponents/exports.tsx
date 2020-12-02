import React from 'react';


// exports includes lower buttons on generator page
const Exports = () => {
  return (
    <div>
      {/* how many rows for your column - defaults to one */}
      <div id="rowsfield">
        <h2 id="tableInputText"># Of Rows</h2>
        <input placeholder="1"></input>
      </div>
      {/* what is the name of the table */}
      <div id="tablefields">
        <h2 id="tableInputText">Table Name</h2>
        <input placeholder="Table One"></input>
      </div>
      {/* button to duplicate your table (option to change name) */}
      <div id="duplicatedata">
        <button id="duplicate">Create New Table</button>
      </div>
      {/* format to export dummy data */}
      <div id="formatinput">
        <h2>Format:</h2>
        <select id="formatoption" placeholder=" Select"><option>Select</option></select>
      </div>
      {/* donwload file button */}
      <div id="download">
        <button>Download Data</button>
      </div>
    </div >
  )
}

export default Exports;