
module.exports = class RecordRepository {
  constructor (recordModel) {
    this.recordModel = recordModel
  }

  async find (query) {
    return this.recordModel.find(query).lean()
  }
}
