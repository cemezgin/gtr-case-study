
module.exports = {
  getStandardResponse: function (status, message, data) {
    return {
      code: status,
      msg: message,
      records: data
    }
  }
}
