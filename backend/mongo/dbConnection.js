import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_HOST = process.env.MONGO_HOST;
const URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

export default connection;
