const { Router } = require('express');

const { getGift } = require('../Controllers/getGifts');

const router = Router();

router.get('/:id', getGift)

module.exports = router;