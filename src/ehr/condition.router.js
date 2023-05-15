const express = require('express');
const { conditionController } = require('./controllers/condition.controller');
const conditionRouter = express.Router();

conditionRouter.get('/', conditionController.list);

module.exports = conditionRouter;
