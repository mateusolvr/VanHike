import mongoose from 'mongoose';
import dbConnection from '../mongo/dbConnection.js';

var accountsDb = dbConnection.useDb('accounts');

let schema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
});

const adminUserModel = accountsDb.model('admin-accounts', schema);

export { adminUserModel };
