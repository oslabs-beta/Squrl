import React, { useState } from 'react';
import Exports from './generatorChildren/exports'

//Dummy Data Generator ParentMost component
const Generator: React.FC = () => {
  //array that holds all the column names
  const [values, setValues] = useState<string[]>([])
  //invoked "add column button" to add component 
  function addInput() {
    // updates state with same array -> adds empty string at last index waiting for input
    setValues([...values, ''])
  }
  // invoked by updating "column names" input, passes event and index as params used to identify index (field) were changing
  function handleChange(e: any, i: number) {
    //updates state by slicing array of names ---> spreads in updated value at index
    setValues(prevValue => [...prevValue.slice(0, i), e.target.value, ...prevValue.slice(i + 1)])
  }

  return (
    <div id="gencontainer">
      {/* title of our generator */}
      <h1 id="gennytitle">Dummy Data Generator</h1>
      <div id="tables">
        {/* loops through array of column names and creates 3-input compononet per index of array */}
        {values.map((el, i) => {
          return (
            // 3-input component being created for everyloop - putting in separate file didnt work
            <div id="column" key={i} >
              {/*  input for column name */}
              <input id="columnName" value={el} placeholder="Column Name" onChange={(e) => handleChange(e, i)}></input>
              {/* slidedown menu for selecting data type that faker api will provide */}
              <select id="dataType" placeholder="Data Type" > <option>Data Type</option></select>
              <div id="percentagediv">
                {/* input field for the percentage of the rows that will be empty-no data recorded */}
                <input id="empty" placeholder="0"></input><h3 id="emptyText">% Empty</h3>
              </div>
            </div >
          )
        })
        }
      </div>
      {/* button that will add another column and invoke add input function to add index to values array */}
      <button onClick={addInput} id="addColumn" > Add Another Column</button>
      {/* exports component holds the number of rows, table name, duplicate table, format, download */}
      <Exports />
    </div >
  )

}

export default Generator;