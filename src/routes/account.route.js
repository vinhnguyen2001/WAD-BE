const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/site/auth.controller");

router.get("/info/:username", authController.getInfo);

module.exports = router;
