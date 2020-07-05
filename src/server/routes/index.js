const middleware = require('../../server/validation/middleware')
const { RESPONSE_CODE_SUCCESS, RESPONSE_SUCCESS } = require('../../constants')
const express = require('express')
const responseHelper = require('../../utils/response-helper')
const recordValidate = require('../../server/validation/record-request')
const router = express.Router()
const { controllers: { recordController } } = require('../../utils/container')

router.post('/records', middleware(recordValidate, 'body'), async (req, res) => {
  const records = await recordController.get(req.body)
  if (res.statusCode === 200) {
    res.send(responseHelper.getStandardResponse(RESPONSE_CODE_SUCCESS, RESPONSE_SUCCESS, records))
  }
})

module.exports = router
