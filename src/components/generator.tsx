import React, { useState } from 'react';
// import Fields from './generatorChildren/fields'
import Exports from './generatorChildren/exports'

type inputObj = {
  input: string;
  type: string;
  percent: string;
}
const initVal = {
  input : '',
  type: '',
  percent: "0"
}

const Generator: React.FC = () => {


  const [values, setValues] = useState<inputObj[]>([])

  function addInput() {
    setValues([...values, initVal])
  }
  //update input value when a user types in new value
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    let value = e.target.value
    console.log(values)
    setValues(prevValue => [...prevValue.slice(0, i), {...values[i], input : value}, ...prevValue.slice(i + 1)])
  }
  //update option type when a new data type is selected
  function handleOption(e: React.ChangeEvent<HTMLSelectElement>, i :number){
    let value = e.target.value
    setValues(prev => [...prev.slice(0, i), {...values[i], type: value},...prev.slice(i + 1)])
    console.log(values)
  }
  //update the % empty value when percent is changed
  function handlePercent(e: React.ChangeEvent<HTMLInputElement>, i:number){
    let value = e.target.value;
    //for testing use this:
    // setValues(prev=> {
    //   let val = [...prev.slice(0, i),{...values[i], percent:(value)},...prev.slice(i + 1)]
    //   console.log(val)
    //   return val
    // })
    setValues(prev=> [...prev.slice(0, i),{...values[i], percent:(value)},...prev.slice(i + 1)])
    console.log(values)
  }
  return (
    <div id="gencontainer">
      <h1 id="gennytitle"> Dummy Data Generator </h1>
      {values.map((el, i) => {
        return (
          <div key={i}>
            <input value={el.input} placeholder="Field Name" onChange={(e) => handleChange(e, i)}></input>
            <div>
            <label>Choose a Data Type</label>
            </div>
            < select id="dataType" onChange={(e)=>handleOption(e,i)}>
              <option value="first_name">Frist Name</option>
              <option value="last_name">Last Name</option>
              <option value="st_address">Street Address</option>
              <option value="city">City</option>
              <option value="state">State</option>
              <option value="zip_code">Zip Code</option>
              <option value="phone_number">Phone Number</option>
              <option value="email">Email</option>
              <option value="image">Image</option>
              <option value="username">Username</option>
              <option value="password">Password</option>
              </select>
            <div id="percentagediv">
              <input onChange={(e)=>handlePercent(e,i)} type='number' min='0' max='100' value={el.percent} id="empty" placeholder="0"></input><h3>% Empty</h3>
            </div>
          </div >
        )
      })}
      <button onClick={addInput} id="addColumn" > Add Another Column</button>
      <Exports />
    </div >
  )

}

export default Generator;