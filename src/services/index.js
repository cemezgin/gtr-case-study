
module.exports = class RecordService {
  constructor (recordRepository) {
    this.recordRepository = recordRepository
  }

  async findFilteredBetweenDatesAndCounts (query) {
    return this.recordRepository.findFilteredBetweenDatesAndCounts(query)
  }
}
