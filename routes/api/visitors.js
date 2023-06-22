const express = require("express");
const router = express.Router();

const { ctrlVisitor } = require("../../controllers");

const { validateBody, authenticate } = require("../../middlewares");

const { addVisitorSchema, patchVisitorsSchema } = require("../../schemas");

router.get("/", authenticate,  ctrlVisitor.readAll);

router.get("/:id",  authenticate, ctrlVisitor.readOne);

router.delete("/:id", authenticate, ctrlVisitor.remove);

router.post("/", authenticate, validateBody(addVisitorSchema), ctrlVisitor.create);

router.patch("/:id", authenticate, validateBody(patchVisitorsSchema), ctrlVisitor.update);

module.exports = router;
