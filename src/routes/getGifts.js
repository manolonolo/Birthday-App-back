const { Router } = require('express');

const { getGifts } = require('../Controllers/getGifts');

const router = Router();

router.get('/', getGifts)

module.exports = router;