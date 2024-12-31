import dotenv from 'dotenv';
import express from 'express';
import sql from 'mssql';
import poolPromise from './db.js';
import { port } from './config.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is my Express server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/data', async (req, res) => {
  try {
    const pool = await poolPromise; // Get the connection pool
    const result = await pool.request().query('SELECT * FROM races'); // Execute query
    res.json(result.recordset); // Send the result
  } catch (err) {
    console.error('Database query failed: ', err);
    res.status(500).send('Error querying the database');
  }
});
