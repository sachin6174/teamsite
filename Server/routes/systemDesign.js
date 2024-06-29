const express = require('express');
const router = express.Router();

router.get('/systemdesign', (req, res) => {
    res.json({ message: 'System Design' });
});

module.exports = router;
