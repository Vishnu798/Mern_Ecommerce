const express = require('express');
const { getData } = require('./admin_controller');
const adminRoute= express.Router();

adminRoute.get('/get_data',getData)


module.exports = adminRoute



  