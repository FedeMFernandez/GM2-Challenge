const { HTTP_STATUS } = require('../../common/constants/http-status.constant')

class EhrNotFoundException extends Error {
  statusCode;
  constructor(message = 'Ehr does not exists', statusCode = HTTP_STATUS.NOT_FOUND) {
    super(message);
    this.statusCode = statusCode;
  }
}

exports.EhrNotFoundException = EhrNotFoundException;
