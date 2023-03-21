import mongoose from 'mongoose';
import dbConnection from '../mongo/dbConnection.js';

var accountsDb = dbConnection.useDb('articles');

let schema = mongoose.Schema({
    creationDate: String,
    createdBy: String,
    description: { intro: String, first: String, second: String },
    elevation: Number,
    lastUpdated: String,
    length: Number,
    location: { latitude: Number, longitude: Number, mapUrl: String },
    routeType: String,
    wayPoints: [
        {
            name: String,
            latitude: Number,
            longitude: Number,
        },
    ],
    title: String,
});

const hikesModel = accountsDb.model('hikes', schema);

export { hikesModel };
