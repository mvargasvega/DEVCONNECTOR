// bring in express
const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Test Route
// @acess Public
router.get('/',(req,res) => res.send ('User Routedd'));

module.exports = router;
