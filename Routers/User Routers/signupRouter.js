const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../../Modals/User Modal/UserModal.js');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
    let isUserExist = await User.findOne({ email: req.body.email });

    if (isUserExist !== null) {
        res.status(400).json({
            status: false,
            msg: "User already exist...!"
        })
    } else {
        bcrypt.hash(req.body.password, 10, (err, hashPassword) => {
            if (err) {
                res.status(401).json({
                    status: false,
                    msg: 'Something went wrong, Please try again letter...',
                    data: err
                })
            } else {
                const user = new User({
                    fName: req.body.fName,
                    lName: req.body.lName,
                    email: req.body.email,
                    contact: req.body.contact,
                    password: hashPassword,
                    createDate: Date()
                })
                user.save()
                    .then((result) => {
                        res.status(200).json({
                            status: true,
                            msg: "Signup successfilly...",
                            data: {
                                fName: result.fName,
                                lName: result.lName,
                                email: result.email,
                                contact: result.contact,
                            }
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(401).json({
                            status: false,
                            msg: 'Something went wrong, Try again...',
                            data: err
                        })
                    })
            }
        })
    }
})

module.exports = router;