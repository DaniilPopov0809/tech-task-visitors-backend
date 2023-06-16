const visitorModel = require("../../models/visitor");

const { HttpError } = require("../../utils");

const remove = async (req, res, next) => {
    const { id } = req.params;
    const result = await visitorModel.remove(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({
      message: `${result.name} ${result.lastname} deleted successfully`,
    });
};

module.exports = remove;
