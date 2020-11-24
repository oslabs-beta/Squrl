import {Request, Response } from 'express'
import path from 'path'
export const fakerController = {

  create : function(req:Request, res: Response, next: any){
    console.log('request: ', req.body)
    res.download(path.resolve(__dirname, '../../src/components/app.tsx'),(err)=>{
      if(err) console.log(err);
      else{
        console.log("hell-o")
      }
    })
    return next();
  }
};
