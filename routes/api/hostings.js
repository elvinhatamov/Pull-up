const express = require('express')
const router = express.Router()
const listingsCtrl = require('../../controllers/listings')

router.post('/', listingsCtrl.create)

// router.put('/update/:id', listingsCtrl.update)

router.get('/list', listingsCtrl.list)
module.exports = router
