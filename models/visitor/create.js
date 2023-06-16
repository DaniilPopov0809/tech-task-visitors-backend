const fs = require("fs/promises");
const path = require("path");
const visitorsPath = path.join(__dirname, "../", "../", "db", "visitors.json");
const { nanoid } = require("nanoid");
const readAll = require("./readAll");

const create = async (body) => {
    const visitors = await readAll();
    const newVisitor = {id: nanoid(), ...body};
    visitors.push(newVisitor);
    await fs.writeFile(visitorsPath, JSON.stringify(visitors, null, 2));
    return newVisitor;
};

module.exports = create;