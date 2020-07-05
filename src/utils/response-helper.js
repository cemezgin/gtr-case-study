
module.exports = {
  getStandardResponse: function (status, message, data = null) {
    return {
      code: status,
      msg: message,
      records: data
    }
  }
}
