const fs = require("fs/promises");
const path = require("path");
const visitorsPath = path.join(__dirname, "../", "db", "visitors.json");
const { nanoid } = require("nanoid");

const readAll = async () => {
  const result = await fs.readFile(visitorsPath);
  return JSON.parse(result);
};

const readOne = async (visitorId) => {
  const visitors = await readAll();
  const result = visitors.find((el) => el.id === visitorId);
  return result || null;
};

const remove = async (visitorId) => {
  const visitors = await readAll();
  const index = visitors.findIndex((el) => el.id === visitorId);
  if (index === -1) {
    return null;
  }
  const [result] = visitors.splice(index, 1);
  await fs.writeFile(visitorsPath, JSON.stringify(visitors, null, 2));
  return result;
};

const create = async (body) => {
    const visitors = await readAll();
    const newVisitor = {id: nanoid(), ...body};
    visitors.push(newVisitor);
    await fs.writeFile(visitorsPath, JSON.stringify(visitors, null, 2));
    return newVisitor;
};

const update = async (visitorId, data) => {
    const visitors = await readAll();
    const index = visitors.findIndex((el) => el.id === visitorId);
if(index === -1){
    return null;
}
visitors[index] = {id:visitorId, ...data};
await fs.writeFile(visitorsPath, JSON.stringify(visitors, null, 2));
return visitors[index];
};

module.exports = {
  readAll,
  readOne,
  remove,
  create,
  update,
};
