const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req, res) =>
{
    try
    {
        //generate new pw
        const salt = await bcrypt.genSalt(10);
        const hashedPW = await bcrypt.hash(req.body.password, salt)

        //create new user
        const newUser = new User
        ({
            username: req.body.username,
            email: req.body.email,
            password: hashedPW
        });

        //save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//login
router.post('/login', async (req, res) =>
{
    try
    {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).send("No user under that email!");

        const validPW = await bcrypt.compare(req.body.password, user.password)
        !validPW && res.status(400).json("Password incorrect.")

        res.status(200).json(user);
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

module.exports = router;