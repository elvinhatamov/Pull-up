const express = require('express')
const router = express.Router()
const listingsCtrl = require('../../controllers/listings')

router.post('/create', listingsCtrl.create)
router.get('/create',(req,res)=>{
 res.status(200).render(req.body)
})


module.exports = router
