import mongoose from 'mongoose';
import dbConnection from '../mongo/dbConnection.js';

var accountsDb = dbConnection.useDb('accounts');

let schema = mongoose.Schema({
    userName: String,
});

const adminUserModel = accountsDb.model('admin-accounts', schema);

export { adminUserModel };
