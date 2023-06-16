const express = require("express");

const visitors = require("../../models/visitors");

const router = express.Router();

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
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await visitors.remove(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const result = await visitors.create(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await visitors.update(id, req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
