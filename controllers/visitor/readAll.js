const visitor = require("../../models/visitor");

const readAll = async (req, res) => {
    const result = await visitor.readAll();
    res.json(result);
};

module.exports = readAll;
