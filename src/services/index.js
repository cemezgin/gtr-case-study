
module.exports = class RecordService {
  constructor (recordRepository) {
    this.recordRepository = recordRepository
  }

  async find (query) {
    return this.recordRepository.findAll(query)
  }
}
