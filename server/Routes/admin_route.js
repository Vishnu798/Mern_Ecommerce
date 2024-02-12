const express = require('express');
const { uploadProduct, getProducts } = require('./admin_controller');
const adminRoute= express.Router();

adminRoute.post('/upload_product',uploadProduct)
adminRoute.get('/get_product',getProducts)

module.exports = adminRoute



  