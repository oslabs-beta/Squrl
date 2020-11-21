import React, { useState } from 'react';
import Exports from './generatorChildren/exports'
const faker = require('faker')


type inputObj = {
  columnName: string;
  category: string;
  subcategory: string; 
  percent: string;
}
const initColumnState = {
  columnName: '',
  category: 'address',
  subcategory: '',
  percent: '0'
}

const Generator: React.FC = () => {
  //genState is entire array of objects holding all table info
  const [genState, setGenState] = useState<inputObj[]>([])
  //invoked on "add another colum" adds {} to genState array
  function addInput() {
    setGenState([...genState, initColumnState])
  }

  //update column name input when a user types in new value
  function handleColumnName(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    let value = event.target.value
    console.log(event.target)
    setGenState(prevValue => [...prevValue.slice(0, index), {...genState[index], columnName : value}, ...prevValue.slice(index + 1)])
  }
  //update the category selected by the user from the drop down
  function handleCategory(event: any, index :number){
    let value = event.target.value
    setGenState(prev => [...prev.slice(0, index), {...genState[index], category: value}, ...prev.slice(index + 1)])
    return value
  }
//updates data type when changed drop down button
  function handleSubcategory(event: any, index :number){
    let value = event.target.value
    setGenState(prev => [...prev.slice(0, index), {...genState[index], subcategory: value}, ...prev.slice(index + 1)])
  }
  //update the % empty value when percent is changed
  function handlePercent(event: React.ChangeEvent<HTMLInputElement>, index:number){
    let value = event.target.value;
    setGenState(prev=> [...prev.slice(0, index),{...genState[index], percent:(value)},...prev.slice(index + 1)])
    console.log(genState)
  }

  return (
    <div id="gencontainer">
      <h1 id="gennytitle"> Dummy Data Generator </h1>
      <div id="tables">
      {genState.map((el, index) => {
        return (
          <div key={index}>
            <input value={el.columnName} placeholder="Column Name" onChange={(event) => handleColumnName(event, index)}></input>
            <div>
            <label>Choose a Data Category</label>
            </div>
            <select id="category" onChange={(event)=>handleCategory(event,index)}>
              <option value="address">Address</option>
              <option value="commerce">Commerce</option>
              <option value="company">Company</option>
              <option value="database">Database</option>
              <option value="date">Date</option>
              <option value="fake">Fake</option>
              <option value="finance">Finance</option>
              <option value="hacker">Hacker</option>
              <option value="helpers">Helpers</option>
              <option value="image">Image</option>
              <option value="internet">Internet</option>
              <option value="lorem">Lorem</option>
              <option value="name">Name</option>
              <option value="phone">Phone</option>
              <option value="random">Random</option>
              <option value="system">System</option>
            </select>

              <select id="subcategory" onClick={(event)=>handleSubcategory(event,index)}> 
                  {genState[index].category ? Object.keys(faker[genState[index].category]).map((el , index)=>{
                    return (<option key={index}> {el} </option>)
                  }):<option>N/a</option>}
              </select><br></br>

             <div id="percentagediv">
              <input onChange={(event)=>handlePercent(event,index)} type='number' min='0' max='100' value={el.percent} id="empty" placeholder="0"></input><h3 id="emptyText">% Empty</h3>
            </div>
          </div >
        )
      })}
      </div>
      <button onClick={addInput} id="addColumn" > Add Another Column</button>
      {/* exports component holds the number of rows, table name, duplicate table, format, download */}
      <Exports />
    </div >
  )
}

export default Generator;