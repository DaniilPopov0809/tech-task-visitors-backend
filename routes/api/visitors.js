const express = require("express");
const router = express.Router();

const { ctrlVisitor } = require("../../controllers");

const { validateBody, authenticate } = require("../../middlewares");

const { addVisitorSchema, patchVisitorsSchema } = require("../../schemas");

router.get("/", authenticate,  ctrlVisitor.readAll);

router.get("/:id", ctrlVisitor.readOne);

router.delete("/:id", ctrlVisitor.remove);

router.post("/", validateBody(addVisitorSchema), ctrlVisitor.create);

router.patch("/:id", validateBody(patchVisitorsSchema), ctrlVisitor.update);

module.exports = router;
