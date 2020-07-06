
module.exports = class RecordRepository {
  constructor (recordModel) {
    this.recordModel = recordModel
  }

  async findBetweenDatesAndCounts (query) {
    const {startDate, endDate , maxCount, minCount} = query;

    return this.recordModel.find({
      createdAt: {
        $gte: new Date(startDate),
        $lt: new Date(endDate)
      },
      totalCount: {
        $gt: minCount,
        $lt: maxCount
      }
    }).lean()
  }
}
