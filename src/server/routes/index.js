const middleware = require('../../schemas/validation/middleware')
const { RESPONSE_CODE_SUCCESS, RESPONSE_SUCCESS } = require('../../constants')
const express = require('express')
const Record = require('../../schemas/models/record')
const responseHelper = require('../../utils/response-helper')
const recordValidate = require('../../schemas/validation/record-request')
const router = express.Router()

router.post('/records', middleware(recordValidate, 'body'), async (req, res) => {
  const records = await Record.find().exec()
  if (res.statusCode === 200) {
    res.send(responseHelper.getStandardResponse(RESPONSE_CODE_SUCCESS, RESPONSE_SUCCESS, records))
  }
})

module.exports = router
