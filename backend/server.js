import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './mongo/dbConnection.js';

dotenv.config();

const app = express();
const APP_PORT = process.env.PORT || 5000;

app.listen(APP_PORT, () => {
    console.log(`Server is running on port: ${APP_PORT}`);
});
