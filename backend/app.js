import dotenv from 'dotenv';
import express from 'express';
import sql from 'mssql';
import poolPromise from './config/db.js';
import { port } from './config/config.js';
import { showDrivers, newDriver } from './controllers/driverController.js';

const app = express();

//Database Models

app.get('/', (req, res) => {
  res.send('Welcome to the Racing API!');
});

//middleware
app.use(express.json());

//Routes

app.get('/api/drivers', showDrivers);
app.post('/api/drivers', newDriver);

//Services




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
