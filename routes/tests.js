const express = require("express");
const router = express.Router();
const TestController = require('../controllers/test.controller')

router.post('/', TestController.executeTest)

module.exports = router;
