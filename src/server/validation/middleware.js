const responseHelper = require('../../utils/response-helper')
const { RESPONSE_CODE_UNPROCESSABLE } = require('../../constants')

const middleware = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property])
    const valid = error == null
    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')
      res.status(422).json(responseHelper.getStandardResponse(RESPONSE_CODE_UNPROCESSABLE, message))
    }
  }
}

module.exports = middleware
