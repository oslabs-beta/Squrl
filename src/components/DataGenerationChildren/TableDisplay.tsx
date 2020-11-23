import React from 'react'
import {inputObj, tableType} from '../../pageContainers/DataGeneration'
const faker = require('faker')

type props = {
    tableStateData : tableType;
}

const TableViewPanel: React.FC<props> = ({tableStateData})=>{
  console.log(tableStateData)
  const wheel = (event:any) =>{
    console.log(event.target.id)
    // console.log(document.getElementById(event.target.id))
    event.currentTarget.scrollLeft += event.deltaY
    // document.getElementById(event.target.id).scrollLeft += event.deltaY;
  }
  const createTable = (tableStateData: tableType) => {
    let arr = [];
    for(const table in tableStateData){
        arr.push(
            <>
                <h1 style={{color:'white'}}>{table}</h1>
                <div id={table} style={{display:'flex',color:'white'}}
                onWheel = {(e) => wheel(e)}
                key={table}>
                    {
                    tableStateData[table].map((colInfo, index)=>{
                        return(
                        <React.Fragment key={index}>
                            <table>

                                <thead>
                                    <tr>
                                        <th>
                                        {colInfo.columnName}  
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody>
                                <td>
                                    {faker[colInfo.category][colInfo.subcategory]()}
                                </td>
                                </tbody>
                            </table>
                        </React.Fragment>
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
