// bring in express
const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Test Route
// @acess Public
router.get('/',(req,res) => res.send ('Auth Route'));

module.exports = router;
