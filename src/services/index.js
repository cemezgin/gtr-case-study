
module.exports = class RecordService {
  constructor (recordRepository) {
    this.recordRepository = recordRepository
  }

  async findFiltered (query) {
    return this.recordRepository.find(query)
  }
}
