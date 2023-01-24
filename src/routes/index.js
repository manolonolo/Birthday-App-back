const { Router } = require('express');

const getGifts = require('./getGifts.js')
const getGiftId = require('./getGiftId.js')

const router = Router();

router.use('/gifts', getGiftId)
router.use('/gifts', getGifts)

module.exports = router;
