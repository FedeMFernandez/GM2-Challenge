const { HTTP_STATUS } = require('../../common/constants/http-status.constant');
const { conditionService } = require('../services/condition.service');

class ConditionController {

  async list(req, res, next) {
    try {
      const conditions = await conditionService.list();
      res.status(HTTP_STATUS.OK).send(conditions);
    } catch (err) {
      next(err);
    }
  }
}

exports.conditionController = new ConditionController();
