const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products')

router.get('/', productCtrl.getItems)
router.post('/', productCtrl.createItem)

module.exports = router;