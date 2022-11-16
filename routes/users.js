const router = require('express').Router();

router.get('/', (req, res) =>
{
    res.send('You found the user routes!');
});

module.exports = router;