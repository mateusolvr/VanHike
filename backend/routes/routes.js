import express from 'express';
import { adminUserModel } from '../models/adminUser.model.js';
import { hikesModel } from '../models/hikes.model.js';

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const adminUsers = await adminUserModel.find({});
        console.log(adminUsers);
        res.send(adminUsers);
    } catch (err) {
        res.status(400).send({ error: err.message });
        logger.error(`GET /users - ${err.message}`);
    }
});

router.get('/hikes', async (req, res) => {
    try {
        const hikes = await hikesModel.find({});
        console.log(hikes);
        res.send(hikes);
    } catch (err) {
        res.status(400).send({ error: err.message });
        logger.error(`GET /hikes - ${err.message}`);
    }
});

export default router;
