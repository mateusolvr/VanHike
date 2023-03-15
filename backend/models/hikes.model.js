import mongoose from 'mongoose';
import dbConnection from '../mongo/dbConnection.js';

var accountsDb = dbConnection.useDb('articles');

let schema = mongoose.Schema({
    title: String,
});

const hikesModel = accountsDb.model('hikes', schema);

export { hikesModel };
