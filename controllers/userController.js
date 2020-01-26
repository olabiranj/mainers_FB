const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// User Model
const User = require('../models/User');


//sign up
exports.newUser = (req, res) => {
    const { firstName, surName, email, password } = req.body;

    // Simple validation
    if (!firstName || !surName || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new User({
                firstName,
                surName,
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user._id },
                                process.env.jwtSecret,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user._id,
                                            firstName: user.firstName,
                                            surName: user.surName,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
}

//login
exports.loginUser = async(req, res, next) => {
    const { email, password } = req.body;

    try {
        // Simple validation
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        // Check for existing user
        let user = await User.findOne({ email })
            
        if (!user) return res.status(400).json({ msg: 'User Does not exist' });

        // Validate password
        let isMatch = await bcrypt.compare(password, user.password)
            
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        jwt.sign(
            { id: user._id },
            process.env.jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        surName: user.surName,
                        email: user.email
                    }
                });
            }
        )
        
        
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

exports.getAllUsers = async(req, res) => {
    try {
        let users = await User.find({}).select('firstName surName email')
        res.status(200).json({
            users
        })
    } catch (error) {
        res.status(400).json({
            error
        })
    }
        
}