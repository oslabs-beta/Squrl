import React, { useState } from 'react';
import Exports from './generatorChildren/exports'
const faker = require('faker')


type inputObj = {
  columnName: string;
  category: string;
  dataType: string; 
  percent: string;
}
const initVal = {
  columnName: '',
  category: 'address',
  dataType: '',
  percent: '0'
}

const Generator: React.FC = () => {
  //values is entire array of objects holding all table info
  const [values, setValues] = useState<inputObj[]>([])

  //passes current state + empty obj
  function addInput() {
    setValues([...values, initVal])
  }
  //update column name input when a user types in new value
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    let value = e.target.value
    console.log(value)
    setValues(prevValue => [...prevValue.slice(0, i), {...values[i], columnName : value}, ...prevValue.slice(i + 1)])
  }
  //update the category selected by the user from the drop down



  function handleCategory(e: any, i :number){
    let value = e.target.value
    setValues(prev => [...prev.slice(0, i), {...values[i], category: value}, ...prev.slice(i + 1)])
    return value
  }

//updates data type when changed drop down button
  function handleType(e: any, i :number){
    // let value = e.target.value
    // setValues(prev => [...prev.slice(0, i), {...values[i], dataType: value}, ...prev.slice(i + 1)])
  }

  //update the % empty value when percent is changed
  function handlePercent(e: React.ChangeEvent<HTMLInputElement>, i:number){
    let value = e.target.value;
    setValues(prev=> [...prev.slice(0, i),{...values[i], percent:(value)},...prev.slice(i + 1)])
    console.log(values)
  }


  return (
    <div id="gencontainer">
      <h1 id="gennytitle"> Dummy Data Generator </h1>
      {values.map((el, i) => {
        return (
          <div key={i}>
            <input value={el.columnName} placeholder="Column Name" onChange={(e) => handleChange(e, i)}></input>
            <div>
            <label>Choose a Data Category</label>
            </div>
            <select id="category" onChange={(e)=>handleCategory(e,i)}>
            {/* if query.selector(btn).value = address --> faker.${address} */}
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

              <select id="datatype" onClick={(e)=>handleType(e,i)}> 
                  {values[i].category ? Object.keys(faker[values[i].category]).map((el , i)=>{
                    return (<option key={i}> {el} </option>)
                  }):<option>N/a</option>}
              </select><br></br>

          <div id="percentagediv">
              <input onChange={(e)=>handlePercent(e,i)} type='number' min='0' max='100' value={el.percent} id="empty" placeholder="0"></input><h3>% Empty</h3>
            </div>
          </div >
        )
      })}
      <button onClick={addInput} id="addColumn" > Add Another Column</button>
      {/* exports component holds the number of rows, table name, duplicate table, format, download */}
      <Exports />
    </div >
  )
}

export default Generator;