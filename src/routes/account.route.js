const express = require("express");
const router = express.Router();

const accountController = require("../app/controllers/account/account.controller");

router.get("/info/:username", accountController.getInfo);

module.exports = router;
