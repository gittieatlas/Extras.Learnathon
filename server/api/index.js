const sms = require('./sms');
const router = require('express').Router();

router.use('/sms', sms);

module.exports = router;
