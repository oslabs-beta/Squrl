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

      <div className="input-div">
        <h6>Select Database</h6>
        <select>
          <optgroup label="SQL">
            <option value="PostgreSQL">PostgreSQL</option>
            <option value="MySQL">MySQL</option>
            <option value="SQLite">SQLite</option>
          </optgroup>
          <optgroup label="NoSQL">
            <option value="MongoDB">Mercedes</option>
            <option value="Redis">Redis</option>
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

      <div className="panel-btn">
        <button onClick={() => { changeDB() }}>
          Get Data
        </button>
      </div>

    </div>
  )
}

export default DataVisualizationPanel;