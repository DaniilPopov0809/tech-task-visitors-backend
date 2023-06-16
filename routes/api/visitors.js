const express = require("express");
const router = express.Router();

const { ctrl } = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { addVisitorSchema, patchVisitors } = require("../../schemas");

router.get("/", ctrl.readAll);

router.get("/:id", ctrl.readOne);

router.delete("/:id", ctrl.remove);

router.post("/", validateBody(addVisitorSchema), ctrl.create);

router.patch("/:id", validateBody(patchVisitors), ctrl.update);

module.exports = router;
