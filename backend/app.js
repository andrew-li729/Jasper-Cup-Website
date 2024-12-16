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
