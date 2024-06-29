const express = require('express');
const router = express.Router();

router.get('/aboutme', (req, res) => {
    res.json({ message: 'About Me' });
});

module.exports = router;
