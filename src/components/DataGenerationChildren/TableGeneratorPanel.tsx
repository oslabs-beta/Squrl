//import useState hook to create state
import React, { useState } from 'react';

//require faker.js npm  to be used to generate dummy data
const faker = require('faker')

//Import for TypeScript types 
import { tableType, inputObj } from '../../pageContainers/DataGeneration'

//Types for the passed down state/tableProps from DataGeneration
type tableProps = {
  tableStateData: tableType;
  tableName: string;
  setTableStateData: any;
  createTable: any;
  setTableName: any;
  setTableRow: any;
  tableRow: number[];
}

//create initial state for Columns of data
const initColumnState = {
  columnName: '',
  category: 'name',
  subcategory: 'firstName',
  percent: '0'
}

//passed down state/tableProps are passed in as arguments for our functional componenet 
const TableGeneratorPanel: React.FC<tableProps> = ({ tableStateData, tableName, setTableStateData, createTable, setTableName, setTableRow, tableRow }) => {

  //State for updating/creating table name
  const [name, setName] = useState<string>('')
  const [row, setRow] = useState<number>(0)

  //initilize column state 
  const [columnState, setColumnState] = useState<inputObj>(initColumnState)

  //set number of rows in final generated table
  const setRowAmount = (event: any) => {
    let { value } = event.target
    setRow(+value)
  }

  //when create table is clicked set name as table name
  const createTableName = (event: any) => {
    let { value } = event.target
    setTableName(value)
  }
 
  //select the table name to add new columns to the table
  const selectTableName = (event: any) => {
    let { value } = event.target
    setName(value);
  }
  //handles update for column name and subcategory
  const updateColumn = (event: React.ChangeEvent<any>) => {
    let { value, name } = event.target;
    setColumnState({ ...columnState, [name]: value })
  }

  //
  const updateCategory = (event: React.ChangeEvent<any>) => {
    let { value, name } = event.target;
    let arr = Object.keys(faker[value])
    setColumnState({ ...columnState, [name]: value, subcategory: arr[0] })
  }

   //!!!BUG!!! resets everything but category
  const addColumn = () => {
    if (name in tableStateData && columnState.columnName) {
      setTableStateData({ ...tableStateData, [name]: [...tableStateData[name], columnState] })
      setColumnState({ ...initColumnState })
    } else if (!(name in tableStateData))
      window.alert("SELECT YOUR TABLE!")
    else
      window.alert("Name your column!")
  }

  const inputRows = () => {
    setTableRow([...tableRow, row])
  }

  return (
    <div className="TableGeneratorContainer">
      <div className="top-left-panel">
        
        <input 
          onChange={createTableName} 
          value={tableName} 
          type="text" 
          placeholder='Table Name'
        />

        <input 
          type="number" 
          onChange= {(event) => setRowAmount(event)} 
          placeholder= "0" 
          value= {row === 0 ? '' : row} 
        />

        <button onClick={(event) => { createTable(event); inputRows() }}>
          Create Table
        </button>

      </div>
      <div className="bottom-left-panel">

        <select name="" id="" onChange={selectTableName}>
          <option style={{ width: '200px' }}>Select Table</option>
          {
            Object.keys(tableStateData).map((table_name, index) => {
              return <option 
                style={{ width: '200px' }} 
                key={index} 
                value={table_name}>{table_name}
              </option>
            })
          }
        </select>

        <h3>Set Column Name</h3>
        <input 
          type='text' 
          placeholder='Column Name' 
          name="columnName" 
          value={columnState.columnName} 
          onChange={(event) => updateColumn(event)} 
        />

        <h3>Select Category</h3>
        <select name='category' onChange={(event) => updateCategory(event)}>
          {Object.keys(faker.definitions).map((category, index) => {
            if (category === 'phone_number'){
              category = 'phone'
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            }
            if (category !== "title" && category !== "separator")
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
          })}
        </select>
        <h3>Select Subcategory</h3>
        <select name='subcategory' onChange={(event) => updateColumn(event)}>
          {Object.keys(faker[columnState.category]).map((subcategory, index) => {
            return (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            )
          })}
        </select>
        <br />
        <button onClick={addColumn}>
          Add Column
        </button>
      </div>
    </div >
  )
}
export default TableGeneratorPanel;