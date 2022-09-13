var router = require('express').Router();

const UserController = require("../components/UsersController");

router.get('/whats_app',UserController.whatsAppMes);


module.exports = router;