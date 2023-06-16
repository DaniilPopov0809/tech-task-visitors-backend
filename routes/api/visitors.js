const express = require("express");

const visitors = require("../../models/visitors");

const router = express.Router();

const { HttpError } = require("../../utils/");
const { addVisitorSchema } = require("../../schemas");

router.get("/", async (req, res, next) => {
  try {
    const result = await visitors.readAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await visitors.readOne(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await visitors.remove(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({
      message: `${result.name} ${result.lastname} deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addVisitorSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await visitors.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = addVisitorSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await visitors.update(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
