import express from 'express';
import { adminUserModel } from '../models/adminUser.model.js';
import { hikesModel } from '../models/hikes.model.js';
import { updateHike, createHike } from '../middleware/db.js';

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const adminUsers = await adminUserModel.find({});
        res.send(adminUsers);
    } catch (err) {
        res.status(400).send({ error: err.message });
        // logger.error(`GET /users - ${err.message}`);
    }
});

router.get('/hikes', async (req, res) => {
    try {
        const hikes = await hikesModel.find({});
        res.send(hikes);
    } catch (err) {
        res.status(400).send({ error: err.message });
        // logger.error(`GET /hikes - ${err.message}`);
    }
});

router.get('/hikes/:id', async (req, res) => {
    try {
        const hikes = await hikesModel.findById({ _id: req.params.id });
        res.send(hikes);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.post('/hikes', async (req, res) => {
    try {
        const hike = await createHike(req.body);
        res.status(201).send(hike);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.delete('/hikes/:id', async (req, res) => {
    try {
        const hike = await hikesModel.findByIdAndDelete({
            _id: req.params.id,
        });
        res.status(200).send();
    } catch (err) {
        res.status(400).send({ error: err.message });
        // logger.error(`DELETE /hike/${req.params.id} - ${err.message}`);
    }
});

router.put('/hikes/:id', async (req, res) => {
    try {
        const hike = await updateHike(req.params.id, req.body);
        res.status(200).send(hike);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

export default router;
