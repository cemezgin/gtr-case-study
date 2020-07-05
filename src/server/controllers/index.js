
module.exports = class RecordController {
  constructor (recordService) {
    this.recordService = recordService
  }

  async get (query) {
    return this.recordService.find(query)
  }
}
