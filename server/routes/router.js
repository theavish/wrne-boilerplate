const router = require('express').Router();

router.get('/test', (req, res) => { res.send('success') });

module.exports = router;