import jwt from 'jsonwebtoken';
import User from '../model/user';


const SECRET_KEY = 'NOTES_API_JAINSS'

const verifyToken = (req, res, next) => {

    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], SECRET_KEY, function (err, decode) {
            if (err) req.user = undefined;
            User.findOne({
                _id: decode.id
            })
                .exec((err, user) => {
                    if (err) {
                        res.status(500)
                            .send({
                                message: err
                            });
                    } else {
                        req.user = user;
                        next();
                    }
                })
        });
    } else {
        req.user = undefined;
        next();
    }
};
module.exports = verifyToken;