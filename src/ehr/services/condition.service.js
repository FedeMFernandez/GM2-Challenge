const { conditionRepository } = require('../repositories/condition.repository');

class ConditionService {

  list() {
    return conditionRepository.list();
  }

}

exports.conditionService = new ConditionService();
