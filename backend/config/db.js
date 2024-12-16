import sql from "mssql";
import {db_user} from './config.js'

//database config

const config = {
    user: db_user, // better stored in an app setting such as process.env.DB_USER
    password: '0fP@u05U^7;?', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'az-jc01.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'jcdb-01', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to jcdb-01 as user:', db_user)
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

export default poolPromise;