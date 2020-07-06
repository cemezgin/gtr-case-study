
module.exports = class RecordController {
  constructor (recordService) {
    this.recordService = recordService
  }

  async getBetweenDateAndCountRanges (request) {
    return this.recordService.findBetweenDatesAndCounts(request.body)
  }
}
