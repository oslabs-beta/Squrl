import React from 'react'
import { inputObj, tableType } from '../../pageContainers/DataGeneration'
const faker = require('faker')


type props = {
  tableStateData: tableType;
  setTableStateData: any;
}

const TableDisplay: React.FC<props> = ({ tableStateData, setTableStateData }) => {
  //delete column
  const deleteTable = (tableName: string) => {
    let newTableStateData = JSON.parse(JSON.stringify(tableStateData))
    delete newTableStateData[tableName]
    setTableStateData({...newTableStateData})
  }
  const deleteColumn = (tableName: string, index: number) => {
    // console.log({...tableStateData, [tableName]: [...tableStateData[tableName].slice(0, index), ...tableStateData[tableName].slice(index + 1)]})
   setTableStateData({...tableStateData, [tableName]: [...tableStateData[tableName].slice(0, index), ...tableStateData[tableName].slice(index + 1)]})
    
  }
  const deleteAllColumns = (tableName: string) => {
    // console.log({...tableStateData, [tableName]: [...tableStateData[tableName].slice(0, index), ...tableStateData[tableName].slice(index + 1)]})
   setTableStateData({...tableStateData, [tableName]: []})
    
  }
  const wheel = (event: any) => {
    // console.log(document.getElementById(event.target.id))
    event.currentTarget.scrollLeft += event.deltaY
    // document.getElementById(event.target.id).scrollLeft += event.deltaY;
  }
  const createTable = (tableStateData: tableType) => {
    let arr = [];
    for (const table in tableStateData) {
      arr.push(
        <>
          <h1 className="tableHeader" style={{ color: 'white' }}>{table}</h1>
          {/* deletes entire table from window */}
          <button 
            className='deleteTableButton' 
            onClick={() => deleteTable(table)}>
            Delete Table
          </button>
          {/* deletes all columns from specified table */}
          <button 
            className='deleteAllColumns' 
            onClick={() => deleteAllColumns(table)}>
            Delete All Columns
          </button>
          <div className="tableContainer"  style={{color: 'white' }}
            onWheel={(e) => wheel(e)}
            key={table}>
            {
              tableStateData[table].map((colInfo, index) => {
                return (
                  <div className="table-wrapper" key={index}>
                    <table className="container" key={colInfo.columnName}>
                      <thead>
                        <tr className="columntr row-first row-last">
                          <th className="columnth first last">
                            <span>{colInfo.columnName}</span>
                            {/* deletes individual column from table */}
                            <button 
                            className='deleteColumnButton'
                            onClick={() => deleteColumn(table, index)}>
                              X
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <td>
                          {colInfo.sampleData}
                        </td>
                      </tbody>
                    </table>
                  </div>
                )
              })
            }
          </div>
        </>
      )
    }
    return arr
  }
  return (
    <div className="table-view-container">
      <div className="table">
        {createTable(tableStateData)}
      </div>
    </div>
  )
}

export default TableDisplay;
