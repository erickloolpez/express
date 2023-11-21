const { Pool } = require('pg')
const {config} = require('../config/config')

// let URI=''

// if(config.isProd){
//   URI = config.dbUrl
// }else{
// const USER = encodeURIComponent(config.dbUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
//  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
// }


// const pool = new Pool({
//   connectionString: URI
// })

// module.exports = pool
const options = {};

if (config.isProd) {
  options.connectionString = config.dbUrl;
  options.ssl =  {
    rejectUnauthorized: false
  };
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  options.connectionString = URI;
}

const pool = new Pool(options);

module.exports = pool;
