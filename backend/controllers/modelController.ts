import {Request, Response } from 'express'
// const db = require('../models/model')

const { Pool } = require('pg');

const PG_URI = 'postgres://dxapjmhz:cF_pf6nkJ3HJz2ROYwFt3oJszCc5Hdvr@lallah.db.elephantsql.com:5432/dxapjmhz';

// create a new pool here using the connection string above
let pool = new Pool({
  connectionString: PG_URI
});

const queryString2 = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;";

export const modelController ={
  getTableName: function(req:Request, res:Response ,next:any){
    pool.query(queryString2).then((data:any)=>{
      res.locals.data = data.rows
      console.log(res.locals.data)
      next();
    })
  },
  getTableSize : function(req:Request, res:Response, next:any){
    pool.query('select relname as table_name, pg_size_pretty(pg_total_relation_size(relname::regclass)) as full_size, pg_size_pretty(pg_relation_size(relname::regclass)) as table_size, pg_size_pretty(pg_total_relation_size(relname::regclass) - pg_relation_size(relname::regclass)) as index_size from pg_stat_user_tables order by pg_total_relation_size(relname::regclass)')
    .then((data:any)=>{
      res.locals.data = data.rows
      console.log(res.locals.data)
      next();
    })
  },
  getCachePercentage: function(req:Request, res: Response, next:any){
    pool.query('SELECT sum(heap_blks_read) as heap_read,sum(heap_blks_hit)  as heap_hit, sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) as ratio FROM pg_statio_user_tables')
    .then((data:any)=>{
      res.locals.data = data.rows
      console.log(res.locals.data)
      next();
    })
  },
  changeDB : function(req:Request, res:Response, next:any){
    console.log(req.body.input)
    pool = new Pool({
      connectionString : `${req.body.input}`
    })
    next();
  }
}