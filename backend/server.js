import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import dbConnection from './mongo/dbConnection.js';
import router from './routes/routes.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/vanhike', router);

const APP_PORT = process.env.PORT || 5000;
app.listen(APP_PORT, () => {
    console.log(`Server is running on port: ${APP_PORT}`);
});
