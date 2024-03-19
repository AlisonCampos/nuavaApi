import { createPool } from 'mysql2/promise';
import {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from './config.js'

export const pool = createPool({
database: DB_DATABASE,
user: DB_USER,
host: DB_HOST,
password: DB_PASSWORD,
ssl: {"rejectUnauthorized":true}
});