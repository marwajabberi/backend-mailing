var express = require('express');
var router = express.Router(); 
const loginController = require('../controller/loginController').loginController

router.post("/v1/auth", loginController);



module.exports = router;
