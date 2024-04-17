import mysql from 'mysql2/promise';
import { envVarSchema } from '../utils/validateEnv';

export const pool = mysql.createPool({
    host: envVarSchema.DB_HOST,
    user: envVarSchema.DB_USER,
    password: envVarSchema.DB_PASSWORD,
    database: envVarSchema.DB_NAME,
    port: envVarSchema.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
