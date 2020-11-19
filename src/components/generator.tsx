// import React, { useEffect, useState } from 'react';
// import Fields from './generatorChildren/fields'
// import Exports from './generatorChildren/exports'

// type inputData = {
//   value: string;
//   dataType: string;
//   empty: number;
// }
// const initialInput = {
//   value : '',
//   dataType : '',
//   empty: 0
// }
// const Generator: React.FC = () => {
//   const [numOfField, setNumOfField] = useState<number>(0);
//   const [field, setField] = useState<JSX.Element[]>([]);
//   const [input, setInput] = useState<inputData[]>([initialInput])

//   const createField = () => {
//     setField(field => [...field, 
//       <Fields 
//         key={numOfField} 
//         number={numOfField}
//         value={initialInput.value}
//         dataType={initialInput.dataType}
//         empty={initialInput.empty}
//         callback = {handleChange}
//       />])
//   }
//   const handleChange = (e: any) => {
//     const {className , value, name} = e.target
//     let temp = [...input];
//     console.log("temp: ", temp)
//     temp[parseInt(className)].value += value;
//     console.log("input ", temp)
//     setInput(temp)
//   }
    
//     const increaseNum = () => {
//       setNumOfField(numOfField + 1);
//       createField();
//       console.log(input)
//   }

//   return (
//     <div id="gencontainer">
//       <h1>Dummy Data Generator</h1>
//       {field}
//       <button onClick={increaseNum} id="addColumn">Add Another Column</button>
//       <Exports />
//     </div>
//   )
// }
// export default Generator

import React, { useState } from 'react';
import Fields from './generatorChildren/fields'
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
    console.log(values)
  }
  function handleChange(e: any, i: number) {
    values[i] = e.target.value
    console.log(values)
    setValues(values)
  }

  return (
    <div id="gencontainer">
      <h1 id="gennytitle"> Dummy Data Generator </h1>
      {/* {fields} */}
      {values.map((el, i) => {
        return (
          <div key={i}>
            <input value={el} placeholder="Field Name" onChange={(e) => handleChange(e, i)}></input>
            <select id="dataType" placeholder="Data Type"><option>Data Type</option></select>
            <div id="percentagediv">
              <input id="empty" placeholder="% empty"></input><h3>%</h3>
            </div>
          </div>
        )
      })}
      <button onClick={addInput} id="addColumn" > Add Another Column</button>
      <Exports />
    </div>
  )

}

export default Generator;