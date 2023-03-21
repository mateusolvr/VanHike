import express from 'express';
import { adminUserModel } from '../models/adminUser.model.js';
import { hikesModel } from '../models/hikes.model.js';

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

router.delete('/hikes/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const hike = await hikesModel.findOneAndDelete({
            _id: req.params.id,
        });
        res.status(200).send();
    } catch (err) {
        res.status(400).send({ error: err.message });
        // logger.error(`DELETE /hike/${req.params.id} - ${err.message}`);
    }
});

export default router;

// let date_time = new Date(ts);
// date = ("0" + date_time.getDate()).slice(-2);
// month = ("0" + (date_time.getMonth() + 1)).slice(-2);
// year = date_time.getFullYear();
// hours = date_time.getHours();
// minutes = date_time.getMinutes();
// seconds = date_time.getSeconds();
// let millisenconds = date_time.getMilliseconds();

// // prints date & time in YYYY-MM-DD format
// console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "." + millisenconds);
