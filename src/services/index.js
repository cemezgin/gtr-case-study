
module.exports = class RecordService {
  constructor (recordRepository) {
    this.recordRepository = recordRepository
  }

  async findFiltered (query) {
    return this.recordRepository.find(
      {
        createdAt: {
          $gte: new Date(query.startDate),
          $lt: new Date(query.endDate)
        },
        totalCount: {
          $gt: query.minCount,
          $lt: query.maxCount
        }
      })
  }
}
