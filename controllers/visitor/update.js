const visitorModel = require("../../models/visitor");

const { HttpError } = require("../../utils/");

const update =  async (req, res, next) => {
    const { id } = req.params;
    const result = await visitorModel.update(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = update;