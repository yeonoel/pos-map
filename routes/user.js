const express = require('express');
const router = express.Router();
const agentCtrl = require('../controllers/user');


router.post('/signup', agentCtrl.signup);
router.post('/login', agentCtrl.login);



// router.get('/',  dashBord);

module.exports = router;