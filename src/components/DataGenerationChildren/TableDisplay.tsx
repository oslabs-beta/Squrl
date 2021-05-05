import React from 'react'
import { tableType } from '../../pageContainers/DataGeneration'

//props for typescript
type props = {
  tableStateData: tableType;
  setTableStateData: any;
}

const TableDisplay: React.FC<props> = ({ tableStateData, setTableStateData }) => {
  //delete table in state
  const deleteTable = (tableName: string) => {
    let newTableStateData = JSON.parse(JSON.stringify(tableStateData))
    delete newTableStateData[tableName]
    setTableStateData({ ...newTableStateData })
  }
  //delete column in state
  const deleteColumn = (tableName: string, index: number) => {
    setTableStateData({ ...tableStateData, [tableName]: [...tableStateData[tableName].slice(0, index), ...tableStateData[tableName].slice(index + 1)] })
  }
  //horizontal scrolling on table
  const wheel = (event: any) => {
    event.currentTarget.scrollLeft += event.deltaY
  }

  //creates a new table for each table in state rendering a new table in html
  const createTable = (tableStateData: tableType) => {
    let arr = [];
    //creates array of all the tables
    for (const table in tableStateData) {
      arr.push(
        <>
          <div className="heading-div">
            <h1>{table}</h1>
            <div id='delete-btn-tb' className="panel-btn">
              <button
                onClick={() => deleteTable(table)}>
                Delete Table
                </button>
            </div>
          </div>
          <div className="tableContainer" style={{ color: 'white' }}
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
                            <span id="colTitle">{colInfo.columnName}</span>
                            {/* deletes individual column from table */}
                            <button
                              className='delete-cl-btn'
                              onClick={() => deleteColumn(table, index)}>
                              X
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="columntd">
                            {colInfo.sampleData}
                          </td>
                        </tr>
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

  //createTable creates as many tables as there are in state. 
  return (
    <div className="table-view-container">
      <div className="table">
        {createTable(tableStateData)}
      </div>
    </div>
  )
}

export default TableDisplay;
