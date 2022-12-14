const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/site/auth.controller");

router.get("/sign-up", authController.get);
router.post("/sign-up", authController.save);
router.post("/sign-in", authController.authentication);

module.exports = router;
