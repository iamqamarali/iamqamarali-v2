import dotenv from 'dotenv'
dotenv.config()

import mysql from 'mysql2/promise';

export default await mysql.createConnection(process.env.DATABASE_URL);