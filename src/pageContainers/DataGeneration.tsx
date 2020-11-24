import React, { useState } from 'react';
import TableGeneratorPanel from '../components/DataGenerationChildren/TableGeneratorPanel';
import TableDisplay from '../components/DataGenerationChildren/TableDisplay';
import axios from 'axios'
//DOES THIS NEED TO BE HERE?
export type inputObj = {
  columnName: string;
  category: string;
  subcategory: string;
  percent: string;
}

//The state type will be an array of inputObj that was defined above 
export type tableStateData = inputObj[];


export type tableType = {
  [key: string]: tableStateData
}

//Container that will passdown state to TableGeneratorPanel and TableView Panel
const DataGeneration: React.FC = () => {
  
  //initialize the different states that will be used 
  const [tableStateData, setTableStateData] = useState<tableType>({})
  const [tableName, setTableName] = useState<string>('');
  const [tableRow, setTableRow] = useState<number[]>([]);

  //creates data table by checking if table name is input. If there is input, copies previous tableStateData and adds a new table. If no table name, do nothing. Resets table name to empty at end.
  const createTable = () => {
    if(tableName){
      setTableStateData(prev => ({ ...prev, [tableName]: [] }));
    } else {
      null;
    }
    setTableName('');
  }

  const createFile =  () => {
    //tableStateData, tableRow
    axios.post('http://localhost:30000/faker/create', 
    {
      arrayOfTables : tableStateData,
      arrayOfRows: tableRow
    })
    .then(data => console.log(data.status))
    .catch(err=>console.log(err));
   
  }

  //Render react components TableGeneratorPanel and TableViewPanel with state passed down as props
  return (
    <div className="title">
      <h1>GENERATE DATA!</h1>
      <div className="datagen_page">
        <div className="panels">
          <div id="inputInfo">
            <TableGeneratorPanel
              tableStateData={tableStateData}
              tableName={tableName}
              setTableStateData={setTableStateData}
              createTable={createTable}
              setTableName={setTableName}
              setTableRow={setTableRow}
              tableRow={tableRow}
            />
          </div>
          <div>
            <TableDisplay
              tableStateData={tableStateData}
            />
          </div>
        </div>
        <button onClick= {createFile}>Download</button>
        <a href='../../assets/templogo.png' download>DOWNLOAD ME</a>
      </div>
    </div>
  )
}

export default DataGeneration;