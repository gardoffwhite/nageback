const express = require('express');
const { randomItem } = require('../controllers/itemController');
const router = express.Router();

router.post('/random', randomItem);

module.exports = router;
