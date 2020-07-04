const express = require('express');
const Record = require('../../schemas/models/record');
const router = express.Router();

router.post('/records', async (req, res) => {
    const records = await Record.find();
    res.render('index', {
      records
    });
  });

module.exports = router;