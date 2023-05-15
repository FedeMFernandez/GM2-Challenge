const { HTTP_STATUS } = require('../../common/constants/http-status.constant');

class UnauthorizedException extends Error {
  statusCode;
  constructor(message = 'Unauthorized', statusCode = HTTP_STATUS.UNAUTHORIZED) {
    super(message);
    this.statusCode = statusCode;
  }
}

exports.UnauthorizedException = UnauthorizedException;
