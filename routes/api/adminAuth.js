const express = require("express");
const router = express.Router();

const { ctrlAuth } = require("../../controllers");

const { validateBody, authenticate } = require("../../middlewares");
const { loginSchema } = require("../../schemas");

router.post("/login", validateBody(loginSchema), ctrlAuth.login);

router.get("/current", authenticate, ctrlAuth.current);

router.post("/logout", authenticate, ctrlAuth.logout);

module.exports = router;
