const express = require('express');
const Record = require('../../schemas/models/record');
const responseHelper = require('../../constants/response-helper')
const router = express.Router();

router.get('/records', async (req, res) => {
    console.log('buraya girmiyor');
    const records = await Record.find().exec();
    res.send(records);
});

module.exports = router; 