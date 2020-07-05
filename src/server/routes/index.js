const { RESPONSE_CODE_SUCCESS, RESPONSE_SUCCESS, REQUEST_BODY } = require('../../constants')
const { controllers: { recordController } } = require('../../utils/container')
const router = require('express').Router()
const responseHelper = require('../../utils/response-helper')
const recordValidate = require('../../server/validation/record-request')
const middleware = require('../../server/validation/middleware')

router.post('/records', middleware(recordValidate, REQUEST_BODY), async (req, res) => {
  const records = await recordController.get(req.body)
  if (res.statusCode === 200) {
    res.send(responseHelper.getStandardResponse(RESPONSE_CODE_SUCCESS, RESPONSE_SUCCESS, records))
  }
})

module.exports = router
