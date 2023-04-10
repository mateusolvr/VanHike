import express from 'express';
import { adminUserModel } from '../models/adminUser.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authRoutes = express.Router();

// @route   POST /auth/login
// @desc    Authenticate user and get token
// @access  Public
authRoutes.post('/login', async (req, res) => {
    const { user, password } = req.body;
    const userExist = await adminUserModel
        .findOne({ userName: user })
        .select('+password');

    if (!userExist) {
        res.status(401).json({ msg: 'Invalid credentials' });
    } else {
        const user = userExist;
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(401).json({ msg: 'Invalid credentials' });
        } else {
            try {
                const payload = {
                    id: user._id,
                    userName: user.userName,
                };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '12h' },
                    (err, token) => {
                        if (err) {
                            console.error(err.message);
                            res.status(500).json({
                                msg: 'Error generating token',
                            });
                        } else {
                            res.json({ token });
                        }
                    }
                );
            } catch (err) {
                console.error(err.message);
                res.status(500).json({ msg: 'Server error' });
            }
        }
    }
});

export default authRoutes;
