//import useState hook to create state
import React, { useState } from 'react';
//require faker.js npm  to be used to generate dummy data
const faker = require('faker')

//Import for TypeScript types 



//passed down state/tableProps are passed in as arguments for our functional componenet 
const DataVisualizationPanel: React.FC = () => {
  return (
    <div className="table-gen-options">
      <div className="sub-panels">

        <div className="create-table">
        <h1 className="GennyTitle">Database Dashboard</h1>

          <div className="input-container">
            <input
              className='create-table-input'
              type="text"
              placeholder='Table Name'
              value=''
            />
            <label className="input-label">Database Connection</label>
          </div>

          <select className='categorySelector'>
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

          <button
            className='panel-buttons'
            onClick={(event) => { console.log(event)}}>
            <span>Connect to Database</span>
          </button>

        </div>
      </div>
      </div>
  )
}

export default DataVisualizationPanel;