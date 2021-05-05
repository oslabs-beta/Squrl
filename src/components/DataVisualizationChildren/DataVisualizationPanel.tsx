//import useState hook to create state
import React from 'react';

//Import for TypeScript types 
type props = {
  input: string;
  setInput: any;
  updateDB: any;
  changeDB: any;
}

//passed down state/tableProps are passed in as arguments for our functional componenet 
const DataVisualizationPanel: React.FC<props> = ({ input, setInput, updateDB, changeDB }) => {
  return (
    <div className="panel-inputs">

      <div className="headings-div">
        <h1>Database Analytics</h1>
      </div>

      <div className="headings-div">
        <h3>Database Connection</h3>
      </div>
    {/* right now the app only works with postgres so maybe take this out */}
      <div className="input-div">
        <h6>Select Database</h6>
        <select>
          <optgroup label="SQL">
            <option value="PostgreSQL">PostgreSQL</option>
            <option disabled value="MySQL">MySQL</option>
            <option disabled value="SQLite">SQLite</option>
          </optgroup>
          <optgroup disabled label="NoSQL">
            <option disabled value="MongoDB">Mercedes</option>
            <option disabled value="Redis">Redis</option>
          </optgroup>
        </select>
      </div>

      <div className="input-div">
        <h6>Database URI</h6>
        <input
          type="text"
          value={input} onChange={updateDB}
        />
      </div>
    {/* changeDB is being passed down from the parent. changeDB also invokes helper functions that run all the metrics */}
      <div className="panel-btn">
        <button onClick={() => { changeDB() }}>
          Get Data
        </button>
      </div>

    </div>
  )
}

export default DataVisualizationPanel;