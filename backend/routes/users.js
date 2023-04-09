import express from 'express';
import bcrypt from 'bcrypt';
import { adminUserModel } from '../models/adminUser.model.js';
import { createUser } from '../middleware/db.js';
import { Auth } from '../middleware/auth.js';

const userRoutes = express.Router();

// @route   POST /users/register
// @desc    Register a new user
// @access  Public
userRoutes.post('/register', async (req, res) => {
    let user = req.body.user;
    let userExist = await adminUserModel.findOne({ userName: user });

    if (userExist) {
        res.status(400).json({ msg: 'User already exists' });
    } else {
        try {
            const { user, password } = req.body;

            let newUser = new adminUserModel({
                userName: user,
                password: password,
            });

            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(newUser.password, salt);

            const createdUser = await createUser(newUser);
            res.status(201).json({
                msg: createdUser.userName + ' was successfully created.',
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: 'Server error' });
        }
    }
});

userRoutes.get('/', Auth, async (req, res) => {
    try {
        const adminUsers = await adminUserModel.find({});
        res.send(adminUsers);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

export default userRoutes;
