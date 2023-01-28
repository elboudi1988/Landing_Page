const express = require("express");
const { helfen } = require("../controllers/helfen");

const router = express.Router();
router.post("/helfen", helfen);

module.exports = router;
