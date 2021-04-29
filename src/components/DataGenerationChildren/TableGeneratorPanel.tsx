//import useState hook to create state
import React, { useState } from 'react';
//custom alert plugin
import swal from 'sweetalert'
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
  sampleData: '',
  percent: '0'
}

//passed down state/tableProps are passed in as arguments for our functional componenet 
const TableGeneratorPanel: React.FC<tableProps> = ({ tableStateData, tableName, setTableStateData, createTable, setTableName, setTableRow, tableRow }) => {

  //State for updating/creating table name
  const [name, setName] = useState<string>('')
  const [row, setRow] = useState<number>(1)

  //initilize column state 
  const [columnState, setColumnState] = useState<inputObj>(initColumnState)

  //set number of rows in final generated table
  const setRowAmount = (event: any) => {
    let { value } = event.target
    setRow(+value)
  }

  //when create table is clicked set table name in state
  const createTableName = (event: any) => {
    let { value } = event.target
    setTableName(value)
  }

  //select the table name to add new columns to the table
  const selectTableName = (event: any) => {
    let { value } = event.target
    setName(value);
  }

  //handles name change for column
  const updateColumn = (event: React.ChangeEvent<any>) => {
    let { value, name } = event.target;
    setColumnState({ ...columnState, [name]: value })
  }

  //handles the subcategory 
  const updateCategory = (event: React.ChangeEvent<any>) => {
    let { value, name } = event.target;
    let arr = Object.keys(faker[value])
    setColumnState({ ...columnState, [name]: value, subcategory: arr[0] })
  }

  //!!!BUG!!! resets everything but category. should there be a category function here ^ like there is for subcategory

  //when you click create column
  const addColumn = () => {
    if (name in tableStateData && columnState.columnName) {
      setTableStateData({ ...tableStateData, [name]: [...tableStateData[name], { ...columnState, sampleData: faker[columnState.category][columnState.subcategory]() }] })
      setColumnState({ ...initColumnState })
    } else if (!(name in tableStateData))
    //custome alerts for if theres no table and or no column. swal is imported
      swal({
        title: "Aw Nuts",
        text: "You forgot to select a table!",
        icon: "warning",
        dangerMode: true,
      })
    else
      swal({
        title: "Aw Nuts",
        text: "You forgot to name your column!",
        icon: "warning",
        dangerMode: true,
      })
  }

  //change stake for number of rows
  const inputRows = () => {
    setTableRow([...tableRow, row])
  }
  // let fakerDef = Object.keysfaker.definitions(faker.definitions)
  let VersionIIObj = ["address", "animal", "commerce", "company", "database", "date", "finance", "music", "hacker", "internet", "lorem", "phone", "name", "system", "vehicle", "datatype", "git", "image", "time", "mersenne", "helpers"]

  return (
    <div className="panel-inputs">

      <div className="headings-div gen-headings" >
        <h1>Generator</h1>
      </div>

      <div className="headings-div gen-headings">
        <h3 className="createTable">Create a Table</h3>
      </div>

      <div className="input-div">
        <h6>Table Name</h6>
        <input
          type="text"
          placeholder=''
          onChange={createTableName}
          value={tableName}
        />
      </div>

      <div className="input-div">
        <h6>Number of Rows</h6>
        <input
          type="number"
          onChange={(event) => setRowAmount(event)}
          placeholder="Number of Rows"
          value={row === 0 ? '' : row}
        />
      </div>

      <div className="panel-btn panel-gen-btn">
        <button
          onClick={(event) => {
            createTable(event);
            inputRows();
          }
          }>
          Create Table
        </button>
      </div>

      <div className="headings-div gen-headings">
        <h3 className="createTable">Create a Table</h3>
      </div>

      <div className="input-div">
        <h6>Select Table</h6>
        <select className="categorySelector" name="" id="" onChange={selectTableName}>
          <option style={{ width: '200px' }}></option>
          {/* loops through array made up of keys of table names and creates drop down selector for each of them */}
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
      </div>

      <div className="input-div">
        <h6>Column Name</h6>
        <input
          type='text'
          placeholder=''
          name="columnName"
          value={columnState.columnName}
          onChange={(event) => updateColumn(event)}
        />
      </div>

      <div className='input-div'>
        <h6>Select Category</h6>
        <select
          name='category'
          onChange={(event) => updateCategory(event)}>
            {/* faker api is massive object of dummy data. faker.definitions holds the title ie: address, name, city  */}
            {/* loop through those definitions and create drop down selections for them (changed phone number for bug) */}
          {VersionIIObj.map((category, index) => {
            if (category === 'phone_number') {
              category = 'phone'
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            }
            //title and separator were extras. do not exist in faker api 
            if (category !== "title" && category !== "separator")
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
          })}
        </select>
      </div>

      <div className='input-div'>
        <h6>Select Subcategory</h6>
        <select name='subcategory' onChange={(event) => updateColumn(event)}>
          {Object.keys(faker[columnState.category]).map((subcategory, index) => {
            //faker[whatever category the user selects] -> gives us the subcategory -> passed into array
            //loops over array and creates option dropdown menu for subcategories
            return (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            )
          })}
        </select>
      </div>

      <div className="panel-btn panel-gen-btn">
        <button
          onClick={addColumn}>
          Create Column
        </button>
        <button onClick={() => console.log(faker.definitions)}>s</button>
      </div>

    </div >
  )
}
export default TableGeneratorPanel;