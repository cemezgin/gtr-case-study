
module.exports = class RecordRepository {
  constructor (recordModel) {
    this.recordModel = recordModel
  }

  async findBetweenDatesAndCounts ({startDate, endDate , maxCount, minCount}) {
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
