const router = require('express').Router();
const Journal = require('../models/Journal');

//get all journals from single user
router.get('/', async (req, res) =>
{
    console.log("success");
});

//get single journal
router.get('/:id', async (req, res) =>
{
    console.log("success");
});

//update
router.put('/:id', async (req, res) =>
{
    if(req.body.userId === req.params.id)
    {
        console.log("Coming soon.")
    }
    else
    {
        return res.status(403).json("Permission to update this account denied.")
    }
});

//delete
router.delete('/:id', async (req, res) =>
{
    if(req.body.userId === req.params.id)
    {
        console.log("Coming soon.")
    }
    else
    {
        return res.status(403).json("Permission to delete this account denied.")
    }
});


module.exports = router;