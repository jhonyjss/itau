const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.get('/', UserController.all);
router.post('/', UserController.store);

module.exports = router;