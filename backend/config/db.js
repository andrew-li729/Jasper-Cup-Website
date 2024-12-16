import sql from "mssql";
import {db_user, password, server, db_port, db_name} from './config.js'

//database config

const config = {
    user: db_user, // better stored in an app setting such as process.env.DB_USER
    password: password, // better stored in an app setting such as process.env.DB_PASSWORD
    server: server, // better stored in an app setting such as process.env.DB_SERVER
    port: db_port, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: db_name, // better stored in an app setting such as process.env.DB_NAME
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