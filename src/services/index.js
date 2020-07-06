
module.exports = class RecordService {
  constructor (recordRepository) {
    this.recordRepository = recordRepository
  }

  async findBetweenDatesAndCounts (query) {
    return this.recordRepository.findBetweenDatesAndCounts(query)
  }
}
