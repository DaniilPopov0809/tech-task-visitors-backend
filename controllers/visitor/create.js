const visitorModel = require("../../models/visitor");

const create = async (req, res, next) => {
    const result = await visitorModel.create(req.body);
    res.status(201).json(result);
 
};

module.exports = create;