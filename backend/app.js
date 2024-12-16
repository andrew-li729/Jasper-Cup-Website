import dotenv from 'dotenv';
import express from 'express';
import sql from 'mssql';
import poolPromise from './config/db.js';
import { port } from './config/config.js';
const app = express();


//const {PORT, USERNAME, PASSWORD, SERVER, DB_PORT, DB_NAME} = require('./config/config.js');
/*
//database config
const config = {
    user: USERNAME, // better stored in an app setting such as process.env.DB_USER
    password: PASSWORD, // better stored in an app setting such as process.env.DB_PASSWORD
    server: SERVER, // better stored in an app setting such as process.env.DB_SERVER
    port: DB_PORT, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: DB_NAME, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}


// Connect to the database
sql.connect(config, (err) => {
    if (err) {
      console.error('Database connection failed:', err);
    } else {
      console.log('Connected to the database');
    }
  });
*/

app.get('/', (req, res) => {
  res.send('Hello, this is my Express server!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});