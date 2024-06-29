const express = require('express');
const router = express.Router();

router.get('/projects', (req, res) => {
    res.json({ message: 'Projects' });
});

module.exports = router;
