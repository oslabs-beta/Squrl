import {Request, Response } from 'express'
import path from 'path'
import fs, { write } from 'fs'
// import * as faker from 'faker'
const faker = require('faker')
export const fakerController = {

  create : function(req:Request, res: Response, next: any){
    let writeStream = fs.createWriteStream('output.sql');
    const {tableData, tableRow} = req.body;
    const tableNameArray = Object.keys(tableData);
    console.log(tableNameArray, tableRow)
    // write some data with a base64 encoding
    // writeStream.write("insert into MOCK_DATA (id, first_name, last_name, email, gender, ip_address) values (1, 'Catlaina', 'Newdick', 'cnewdick0@irs.gov', 'Female', '82.14.134.175');", 'utf-8');writeStream.write("insert into MOCK_DATA (id, first_name, last_name, email, gender, ip_address) values (2, 'Minnaminnie', 'Linklater', 'mlinklater1@ft.com', 'Female', '60.225.100.116');", 'utf-8');
    for(const tablename of tableNameArray){
      let start = 0;
      for(let row = 0; row<tableRow[0]; row++){
      let columnNameArray = []
      let fakeDataArray= []
      let columnArray = tableData[tablename];
      for(let i = 0; i< columnArray.length; i++){
        columnNameArray.push(columnArray[i].columnName)
        fakeDataArray.push(`${faker[columnArray[i].category][columnArray[i].subcategory]()}`)
      }
      writeStream.write(`insert into ${tablename} (${columnNameArray.join(', ')}) values (${fakeDataArray.join(', ')});\n`, 'utf-8');
    }
      writeStream.write('\n','utf-8')
    }




    /**
     log(
    squel.insert()
        .into("students")
        .setFieldsRows([
          { name: "Thomas", age: 29 },
          { name: "Jane", age: 31 }
        ])
        .toString()
);
     */

    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
      console.log('wrote all data to file');
      next();
    });
      
      // close the stream
      writeStream.end();
  }
};
