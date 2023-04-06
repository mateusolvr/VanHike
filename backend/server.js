import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import dbConnection from './mongo/dbConnection.js';
import routes from './routes/routes.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/vanhike', routes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const APP_PORT = process.env.PORT || 5000;
app.listen(APP_PORT, () => {
    console.log(`Server is running on port: ${APP_PORT}`);
});
