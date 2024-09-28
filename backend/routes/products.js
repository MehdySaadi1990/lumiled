const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const multer = require('../middleware/multer')

const productCtrl = require('../controllers/products')

router.get('/', productCtrl.getItems)
router.post('/',auth, multer, productCtrl.createItem)
router.delete('/deleteItem/:id', auth, productCtrl.deleteItem)
router.get('/pdf/:fiche_tech', auth, productCtrl.getPdf)
router.delete('/deleteItem', auth, productCtrl.deleteItem)
router.put('/update/:id', auth, productCtrl.updateItem)

module.exports = router;