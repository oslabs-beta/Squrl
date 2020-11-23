//import useState hook to create state
import React, { useState } from 'react';

//require faker.js npm  to be used to generate dummy data
const faker = require('faker')
//Import for TypeScript types 
import { tableType, inputObj } from '../DataGenPage'

type props = {
  tableStateData: tableType;
  tableName: string;
  setTableStateData: any;
  addTable: any;
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

const TableGeneratorPanel: React.FC<props> = ({ tableStateData, tableName, setTableStateData, addTable, setTableName, setTableRow, tableRow }) => {

  console.log(Object.keys(tableStateData))

  //State for updating/creating table name
  const [name, setName] = useState<string>('')
  const [row, setRow] = useState<number>(0)
  //create a temp column state 
  const [columnState, setColumnState] = useState<inputObj>(initColumnState)

  const updateColumn = (event: React.ChangeEvent<any>) => {
    let { value, name } = event.target;
    setColumnState({ ...columnState, [name]: value })
    console.log(columnState)
  }
  const updateCategory = (event: React.ChangeEvent<any>) => {
    let { value, name } = event.target;
    let arr = Object.keys(faker[value])
    setColumnState({ ...columnState, [name]: value, subcategory: arr[0] })
    console.log(columnState)
  }

  //when create table is clicked set name as table name
  const updateTableName = (event: any) => {
    let { value } = event.target
    setTableName(value)
  }

  //select the table name to access correct key value pair
  const getTableName = (event: any) => {
    let { value } = event.target
    setName(value);
  }

  const addColumn = () => {
    if (name in tableStateData && columnState.columnName) {
      ///!!!BUG!!! resets everything but category
      setTableStateData({ ...tableStateData, [name]: [...tableStateData[name], columnState] })
      setColumnState({ ...initColumnState })
    }
    else if (!(name in tableStateData))
      window.alert("SELECT YOUR TABLE!")
    else
      window.alert("Name your column!")
  }

  const inputRows = () => {
    setTableRow([...tableRow, row])
    console.log('here is', tableRow)
  }

  const updateRow = (e: any) => {
    let { value } = e.target
    setRow(+value)
    console.log(row)
  }

  // console.log(faker.separator);
  return (
    <div className="TableGeneratorContainer">
      <div className="top-left-panel">
        <input onChange={updateTableName} value={tableName} type="text" placeholder='Table Name' />
        <input type="number" onChange={(e) => updateRow(e)} placeholder="0" value={row === 0 ? '' : row} />
        <button onClick={(e) => { addTable(e); inputRows() }}>Generate Table</button>
      </div>
      <div className="bottom-left-panel">

        <select name="" id="" onChange={getTableName}>
          <option style={{ width: '200px' }}>Select Your Table</option>
          {

            Object.keys(tableStateData).map((table_name, index) => {
              return <option style={{ width: '200px' }} key={index} value={table_name}>{table_name}</option>
            })
          }
        </select>

        <h3>Column Name</h3>
        <input type='text' placeholder='Column Name' name="columnName" value={columnState.columnName} onChange={(event) => updateColumn(event)} />
        <h3>Select a Category!</h3>
        <select name='category' onChange={(event) => updateCategory(event)}>
          {Object.keys(faker.definitions).map((category, index) => {
            if (category !== "title" && category !== "separator")
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
          })}
        </select>
        <h3>Subcategory</h3>
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
        <button onClick={addColumn}>Add Column</button>
      </div>
    </div >
  )
}
export default TableGeneratorPanel;