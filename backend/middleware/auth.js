import jwt from 'jsonwebtoken';

export function Auth(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        res.status(401).json({ msg: 'There is no token' });
    } else {
        try {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    console.error(err.message);
                    res.status(500).json({ msg: 'Invalid token' });
                } else {
                    req.user = decoded.userName;
                    req.userId = decoded.id;
                    next();
                }
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: 'Server error' });
        }
    }
}
