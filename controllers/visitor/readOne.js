const visitorModel = require("../../models/visitor");

const { HttpError } = require("../../utils");

const readOne = async (req, res, next) => {
    const { id } = req.params;
    const result = await visitorModel.readOne(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = readOne;
