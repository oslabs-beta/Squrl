import {Request, Response } from 'express'
// const db = require('../models/model')

const { Pool } = require('pg');

const PG_URI = 'postgres://dxapjmhz:cF_pf6nkJ3HJz2ROYwFt3oJszCc5Hdvr@lallah.db.elephantsql.com:5432/dxapjmhz';

// create a new pool here using the connection string above
let pool = new Pool({
  connectionString: PG_URI,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
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
      // console.log(res.locals.data)
      next();
    })
  },
  getCachePercentage: function(req:Request, res: Response, next:any){
    pool.query('SELECT sum(heap_blks_read) as heap_read,sum(heap_blks_hit)  as heap_hit, sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) as ratio FROM pg_statio_user_tables')
    .then((data:any)=>{
      res.locals.data = data.rows
      console.log('query cache', res.locals.data)
      next();
    })
  },
  getIndexHitRate: function(req:Request, res: Response, next:any){
    pool.query('SELECT sum(idx_blks_read) as idx_read,sum(idx_blks_hit)  as idx_hit, sum(idx_blks_hit) / (sum(idx_blks_hit) + sum(idx_blks_read)) as ratio FROM pg_statio_user_indexes')
    .then((data:any)=>{
      res.locals.data = data.rows
      console.log('indexhitrate backend', res.locals.data)
      next();
    })
  }, 

  getIndexUsage: function(req:Request, res: Response, next:any){
    pool.query('SELECT relname, 100 * idx_scan / (seq_scan + idx_scan) percent_of_times_index_used, n_live_tup rows_in_table FROM pg_stat_user_tables WHERE seq_scan + idx_scan > 0 ORDER BY n_live_tup DESC')
    .then((data:any)=>{
      res.locals.data = data.rows
      console.log('indexusage backend', res.locals.data)
      next();
    })
  }, 




  changeDB : function(req:Request, res:Response, next:any){
    // console.log(req.body.input)
   
    pool.end().then(()=>{
    let length = req.body.input.length
    console.log(req.body.input.slice(length-8,length))
    pool = new Pool({
      connectionString : `${req.body.input}`, 
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    })
    next();
  })
  }
}