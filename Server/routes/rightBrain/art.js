const express = require('express');
const router = express.Router();

router.get('/rightbrain/art', (req, res) => {
    res.json({ message: 'Art' });
});

module.exports = router;
