
module.exports = class RecordRepository {
  constructor (recordModel) {
    this.recordModel = recordModel
  }

  async findAll (query) {
    return this.recordModel.find({}).lean()
  }
}