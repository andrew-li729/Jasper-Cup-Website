import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT;
export const db_user = process.env.DB_USER;
export const password = process.env.PASSWORD;
export const server = process.env.SERVER;
export const db_port = process.env.DB_PORT;
export const db_name = process.env.DB_NAME;
