import dotenv from 'dotenv';
dotenv.config();

//these are all variables stored in an external dotenv file for secure connection to sql
export const port = process.env.PORT;
export const db_user = process.env.DB_USER;
export const password = process.env.PASSWORD;
export const server = process.env.SERVER;
export const db_port = parseInt(process.env.DB_PORT,10);
export const db_name = process.env.DB_NAME;