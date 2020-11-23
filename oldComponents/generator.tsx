// import React, { useState } from 'react';
// import Exports from './generatorChildren/exports'
// const faker = require('faker')

// //assign types for TS
// type inputObj = {
//   columnName: string;
//   category: string;
//   subcategory: string; 
//   percent: string;
// }
// //create initial state for Columns of data
// const initColumnState = {
//   columnName: '',
//   category: 'address',
//   subcategory: '',
//   percent: '0'
// }

// const Generator: React.FC = () => {

//   //genState is entire array of objects holding all table info
//   const [genState, setGenState] = useState<inputObj[]>([]);

//   //invoked on "add another colum" adds {} to genState array
//   function addNewColumn() {
//     setGenState([...genState, initColumnState]);
//   };

//   //update column name input when a user types in new value
//   function handleColumnName(event: React.ChangeEvent<HTMLInputElement>, index: number) {
//     let value = event.target.value;
//     setGenState(prevValue => [...prevValue.slice(0, index), {...genState[index], columnName : value}, ...prevValue.slice(index + 1)]);
//   };

//   //update the category selected by the user from the drop down
//   function handleCategory(event: any, index :number){
//     let value = event.target.value;
//     setGenState(prev => [...prev.slice(0, index), {...genState[index], category: value}, ...prev.slice(index + 1)]);
//     return value;
//   };

// //updates data type when changed drop down button
//   function handleSubcategory(event: any, index :number){
//     let value = event.target.value;
//     setGenState(prev => [...prev.slice(0, index), {...genState[index], subcategory: value}, ...prev.slice(index + 1)]);
//   };

//   //update the % empty value when percent is changed
//   function handlePercent(event: React.ChangeEvent<HTMLInputElement>, index:number){
//     let value = event.target.value;
//     setGenState(prev=> [...prev.slice(0, index),{...genState[index], percent:(value)},...prev.slice(index + 1)]);
//   };

//   return (
//     <div id="gencontainer">
//       <h1 id="gennytitle"> Dummy Data Generator </h1>
//       <div id="tables">
//       {/* map all functions and category/subcategory choices to each newly created column */}
//       {genState.map((el, index) => {
//         return (
//           <div key={index}>
//             <input value={el.columnName} placeholder="Column Name" onChange={(event) => handleColumnName(event, index)}></input>
//             <div>
//             <label>Choose a Data Category</label>
//             </div>

//             {/* Category choices from faker */}
//             <select id="category" onChange={(event)=>handleCategory(event,index)}>
//               <option value="address">Address</option>
//               <option value="commerce">Commerce</option>
//               <option value="company">Company</option>
//               <option value="database">Database</option>
//               <option value="date">Date</option>
//               <option value="fake">Fake</option>
//               <option value="finance">Finance</option>
//               <option value="hacker">Hacker</option>
//               <option value="helpers">Helpers</option>
//               <option value="image">Image</option>
//               <option value="internet">Internet</option>
//               <option value="lorem">Lorem</option>
//               <option value="name">Name</option>
//               <option value="phone">Phone</option>
//               <option value="random">Random</option>
//               <option value="system">System</option>
//             </select>

//             {/* map selected faker category object to create subcategory options from keys */}
//             <select id="subcategory" onClick={(event)=>handleSubcategory(event,index)}> 
//               {Object.keys(faker[genState[index].category])
//                 .map((el, index) => {
//                 return (
//                 <option key={index}> 
//                   {el} 
//                 </option>)
//                 })
//               }
//             </select>
//             <br></br>
            
//             {/* percentage box to determine percent of values that will be empty in each row*/}
//             <div id="percentagediv">
//               <input onChange={(event) => handlePercent(event, index)} type='number' min='0' max='100' value={el.percent} id="empty" placeholder="0"></input>
//               <h3 id="emptyText">% Empty</h3>
//             </div>
//           </div>
//         )
//       })}
//       </div>

//       {/* creates new column and adds new state object to genState array */}
//       <button onClick={addNewColumn} id="addColumn">Add Another Column</button>

//       {/* exports component holds the number of rows, table name, duplicate table, format, download */}
//       <Exports />
//     </div >
//   )
// }

// export default Generator;