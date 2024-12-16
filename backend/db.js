import sql from "mssql";
import {db_user, password, server, db_port, db_name} from './config.js'

//configuration for connecting to database

const config = {
    user: db_user,
    password: password,
    server: server,
    port: db_port,
    database: db_name,
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