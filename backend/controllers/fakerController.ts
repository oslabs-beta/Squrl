import {Request, Response } from 'express'
import path from 'path'
import fs, { write } from 'fs'
const faker = require('faker')

function isNumeric(value:string) {
  return /^-?\d+$/.test(value);
}
export const fakerController = {

  create : function(req:Request, res: Response, next: any){
    let writeStream = fs.createWriteStream('output.sql');
    const {tableData, tableRow} = req.body;
    const tableNameArray = Object.keys(tableData);
    console.log(tableNameArray, tableRow)
    // write some data with a base64 encoding
    // writeStream.write("insert into MOCK_DATA (id, first_name, last_name, email, gender, ip_address) values (1, 'Catlaina', 'Newdick', 'cnewdick0@irs.gov', 'Female', '82.14.134.175');", 'utf-8');writeStream.write("insert into MOCK_DATA (id, first_name, last_name, email, gender, ip_address) values (2, 'Minnaminnie', 'Linklater', 'mlinklater1@ft.com', 'Female', '60.225.100.116');", 'utf-8');
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
      next();
    });
      
      // close the stream
      writeStream.end();
  }
};
