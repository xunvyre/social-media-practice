const router = require('express').Router();
const Journal = require('../models/Journal');

//get all journals
router.get('/', async (req, res) =>
{
    try
    {
        const journals = await Journal.find({userId: req.body.userId});
        res.status(200).json(journals);
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//get single journal
router.get('/:id', async (req, res) =>
{
    try
    {
        const journal = await Journal.findById(req.params.id);
        res.status(200).json(journal);
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//create a post
router.post('/', async (req, res) =>
{
    const newJournal = new Journal(req.body);
    try
    {
        const savedJournal = await newJournal.save();
        res.status(200).json(savedJournal);
    }
    catch (err)
    {
        res.status(500).json(err);
    }
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
        return res.status(403).json("Permission to update journal account denied.")
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
        return res.status(403).json("Permission to delete this journal denied.")
    }
});


module.exports = router;