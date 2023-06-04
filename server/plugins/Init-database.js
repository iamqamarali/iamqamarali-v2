import BaseModel from "../models/BaseModel"
import mysql from 'mysql2/promise';

export default defineNitroPlugin(async () => {
    const db = await mysql.createConnection(process.env.DATABASE_URL);
    BaseModel.setConnection(db);
    return {  nessage : "connected" }
})