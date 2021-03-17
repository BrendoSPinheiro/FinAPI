const { Router } = require('express');
const router = Router();

const AccountController = require('./app/controllers/AccountController');

router.post('/accounts', AccountController.store);

module.exports = router;