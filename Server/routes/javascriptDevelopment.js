const express = require('express');
const router = express.Router();

router.get('/javascriptDevelopment', (req, res) => {
    res.json({ message: 'JavaScript Development' });
});

module.exports = router;
