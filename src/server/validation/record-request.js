const JoiBase = require('@hapi/joi')
const JoiDate = require('@hapi/joi-date')

const Joi = JoiBase.extend(JoiDate)

const recordValidate = Joi.object().keys({
  startDate: Joi.date().format('YYYY-MM-DD').utc().required(),
  endDate: Joi.date().format('YYYY-MM-DD').utc().required(),
  minCount: Joi.number().required(),
  maxCount: Joi.number().required()
})

module.exports = recordValidate
