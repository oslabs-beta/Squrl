import {Request, Response } from 'express'
import path from 'path'
import fs, { write } from 'fs'
// import * as faker from 'faker'
const faker = require('faker')

function isNumeric(value:string) {
  return /^-?\d+$/.test(value);
}
export const fakerController = {

  create : function(req:Request, res: Response, next: any){
    let writeStream = fs.createWriteStream('output.sql');
    const {tableData, tableRow} = req.body;
    const tableNameArray = Object.keys(tableData);
    let start = 0;
    for(const tablename of tableNameArray){
      for(let row = 0; row<tableRow[start]; row++){
      let columnNameArray = []
      let fakeDataArray= []
      let columnArray = tableData[tablename];
      for(let i = 0; i< columnArray.length; i++){
        columnNameArray.push(columnArray[i].columnName)
        let value:any = (!isNumeric(faker[columnArray[i].category][columnArray[i].subcategory]()[0]))? `"${faker[columnArray[i].category][columnArray[i].subcategory]()}"`: faker[columnArray[i].category][columnArray[i].subcategory]()
        fakeDataArray.push(value)
      }
      writeStream.write(`insert into ${tablename} (${columnNameArray.join(', ')}) values (${fakeDataArray.join(', ')});\n`, 'utf-8');
    }
      start+=1;
      writeStream.write('\n','utf-8')
    }
    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
      console.log('wrote all data to file');
      next();
    });
      // close the stream
      writeStream.end();
  }
};
