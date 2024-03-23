const express = require('express');
const router = express.Router();
const { generateUrl } = require('../controllers/url');

router.post("/", generateUrl);

module.exports = router;