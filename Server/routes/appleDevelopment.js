const express = require('express');
const router = express.Router();

router.get('/appleDevelopment', (req, res) => {
    res.json({ message: 'Apple Development' });
});

module.exports = router;
