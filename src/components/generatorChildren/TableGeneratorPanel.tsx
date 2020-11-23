import React,{useState} from 'react';

//Import for TypeScript types 
import {tableType} from '../DataGenPage'

type props = {
    tableStateData : tableType;
    tableName: string;
    setTableStateData: any;
    addTable : any;
    setTableName: any;
}
//create initial state for Columns of data
const initColumnState = {
    columnName: '',
    category: 'address',
    subcategory: '',
    percent: '0'
    }

const TableGeneratorPanel: React.FC<props> = ({tableStateData, tableName, setTableStateData, addTable, setTableName})=>{
       /**
     * Visual of tableData
     * {
     * Trent:[{...},{...}],
     * Andy: [{...},{...}],
     * Seamus: [{...},{...},{...}],
     * Carlos: [{...},{...},{...}]
     * }
     */
    console.log(Object.keys(tableStateData))

    //State for updating/creating table name
    const [name, setName] = useState<string>('')

    //when create table is clicked set name as table name
    const updateTableName = (event:any)=>{
        let value = event.target.value
        setTableName(value)
    }

    //select the table name to access correct key value pair
    const getTableName = (e:any) =>{
        setName(e.target.value);
    }

    const addColumn = () =>{
        console.log(name)
        setTableStateData({...tableStateData, [name]:[...tableStateData[name],initColumnState]})
    }
 
    return(
        <div className="TableGeneratorContainer">
            <div className="top-left-panel">
                <input onChange={updateTableName} value={tableName} type="text" placeholder='Table Name'/>
                <input type="text" placeholder="Number of Rows"/>
                <button onClick={(e)=>addTable(e)}>Generate Table</button>
            </div>
            <div className="bottom-left-panel">
                <select name="" id="" onChange={getTableName}>
                     <option style={{width:'200px'}}>Select Your Table</option>
                {
                    
                    Object.keys(tableStateData).map((table_name, index)=>{
                    return <option style={{width:'200px'}} key={index} value={table_name}>{table_name}</option>
                    })
                }
                </select>
                
                <button onClick={addColumn}>Add Column</button>
            </div>
        </div>
    )
}
export default TableGeneratorPanel;