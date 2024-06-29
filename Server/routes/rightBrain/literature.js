const express = require('express');
const router = express.Router();

router.get('/rightbrain/literature', (req, res) => {
    res.json({ message: 'Literature' });
});

module.exports = router;
