import React, { useState } from 'react';
// import Fields from './generatorChildren/fields'
import Exports from './generatorChildren/exports'


const Generator: React.FC = () => {

  // return (
  //   <div id="gencontainer">
  //     <h1>Dummy Data Generator</h1>

  //     <button id="addColumn">Add Another Column</button>
  //     <Exports />
  //   </div>
  // )

  const [values, setValues] = useState<string[]>([])

  function addInput() {
    setValues([...values, ''])
  }
  function handleChange(e: any, i: number) {
    values[i] = e.target.value
    console.log(values)
    setValues(prevValue => [...prevValue.slice(0, i), e.target.value, ...prevValue.slice(i + 1)])
  }

  return (
    <div id="gencontainer">
      <h1 id="gennytitle"> Dummy Data Generator </h1>
      {/* {fields} */}
      {values.map((el, i) => {
        return (
          <div key={i}>
            <input value={el} placeholder="Field Name" onChange={(e) => handleChange(e, i)}></input>
            < select id="dataType" placeholder="Data Type" > <option>Data Type</option></select>
            <div id="percentagediv">
              <input id="empty" placeholder="0"></input><h3>% Empty</h3>
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