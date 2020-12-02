import React from 'react'
import { inputObj, tableType } from '../../pageContainers/DataGeneration'
const faker = require('faker')


type props = {
  tableStateData: tableType;
}

const TableViewPanel: React.FC<props> = ({ tableStateData }) => {
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
                            {colInfo.columnName}
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

export default TableViewPanel;
