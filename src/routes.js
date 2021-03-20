const { Router } = require('express');
const router = Router();

const AccountController = require('./app/controllers/AccountController');

router.get('/accounts/:cpf/statement', AccountController.getStatement);
router.post('/accounts', AccountController.store);

module.exports = router;