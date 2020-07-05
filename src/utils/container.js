const Record = require('../models/record')
const RecordController = require('../server/controllers')
const RecordService = require('../services')
const RecordRepository = require('../repositories')

const recordController = new RecordController(
    new RecordService(
        new RecordRepository(
                Record
            )
        )
    );

module.exports = {
    controllers: {
        recordController,
    },
}