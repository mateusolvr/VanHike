import mongoose from 'mongoose';
import dbConnection from '../mongo/dbConnection.js';

var accountsDb = dbConnection.useDb('articles');

let schema = mongoose.Schema(
    {
        creationDate: {
            type: String,
            immutable: true,
            required: true,
            select: false,
        },
        createdBy: {
            type: String,
            immutable: true,
            required: true,
            select: false,
        },
        description: {
            intro: { type: String, required: true },
            first: { type: String },
            second: { type: String },
        },
        images: {
            main: { type: String, required: true },
            first: { type: String },
            second: { type: String },
            footer: { type: String },
        },
        elevation: { type: Number },
        lastUpdated: { type: String, required: true, select: false },
        length: { type: Number },
        location: {
            latitude: { type: Number },
            longitude: { type: Number },
            mapUrl: { type: String },
        },
        routeType: { type: String },
        wayPoints: [
            {
                name: { type: String },
                latitude: { type: Number },
                longitude: { type: Number },
            },
        ],
        title: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const hikesModel = accountsDb.model('hikes', schema);

export { hikesModel };
