// const { Pool } = require('pg');

// const PG_URI = 'postgres://dxapjmhz:cF_pf6nkJ3HJz2ROYwFt3oJszCc5Hdvr@lallah.db.elephantsql.com:5432/dxapjmhz';

// // create a new pool here using the connection string above
// const pool = new Pool({
//   connectionString: PG_URI
// });

// module.exports = {
//   query: (text:string, params:any, callback:any) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };