const express = require('express');
const router = express.Router();

router.get('/rightbrain/songs', (req, res) => {
    res.json({ message: 'Songs' });
});

module.exports = router;
