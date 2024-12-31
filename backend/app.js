import dotenv from 'dotenv';
import express from 'express';
import sql from 'mssql';
import poolPromise from './config/db.js';
import { port } from './config/config.js';
const app = express();
import driverRoutes from './routes/driverRoutes.js';

app.use('/api', driverRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Racing API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
