
module.exports = class RecordRepository {
  constructor (recordModel) {
    this.recordModel = recordModel
  }

  async find (query) {
    return this.recordModel.find({
      createdAt: {
        $gte: new Date(query.startDate),
        $lt: new Date(query.endDate)
      },
      totalCount: {
        $gt: query.minCount,
        $lt: query.maxCount
      }
    }).lean()
  }
}
