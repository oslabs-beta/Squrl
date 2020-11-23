import React from 'react'
import {inputObj, tableType} from '../DataGenPage'
const faker = require('faker')

type props = {
    tableStateData : tableType;
}

const TableViewPanel: React.FC<props> = ({tableStateData})=>{
    console.log(tableStateData)
    const createTable = (tableStateData: tableType) => {
        let arr = [];
        for(const key in tableStateData){
            arr.push(
                <>
                    <h1 style={{color:'white'}}>{key}</h1>
                    <div key={key}>
                        {
                        tableStateData[key].map((colInfo, index)=>{
                            return(
                            <React.Fragment key={index}>
                                <table>
                                    <thead>
                                        <tr>
                                           <th>
                                           {colInfo.category}  
                                           </th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <td>
                                        {faker.address.zipCode()}
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
